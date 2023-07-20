<template>
  <div class="container flex px-4 md:px-0 py-8 mx-auto flex-col">
    <Filter :filterOptions="myFilterOptions" @updateFilter="applyFilter" />
    <Table :rows="rows" :headers="header" :product-store="productsStore" />
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref, watch,provide } from "vue";
import { toast } from "vue3-toastify";

//
import { useProductsStore } from "../store/products";
import { usePossibleStore } from "../store/possibleValues";

//
import { TableHeader, TableRow } from "../lib/types/table";
import { Product } from "../lib/types/product";
//

import Table from "./table/Table.vue";
import Filter from "./Filter.vue";
import { LoadingStore } from "../store/loading";
import { createRows } from "../lib/const/createProductRows";

export default {
  components: {
    Table,
    Filter,
  },
  setup() {
    const productsStore = useProductsStore();
    const products = ref<Product[]>([]);
    const rows = ref<TableRow[]>([]);

    const possibleStore = usePossibleStore();
    const loadingStore = inject("loadingStore") as LoadingStore;
    const myFilterOptions = ref({});

    provide("productStore", productsStore);

    watch(
      productsStore,
      () => {
        rows.value = createRows(productsStore.products);
      },
      { deep: true }
    )
    const loadOptions = async () => {
      loadingStore.setLoading(true);
      try {
        const params = [
          "season",
          "width",
          "profile",
          "diameter",
          "brand",
          "tread",
        ];
        await Promise.all(
          params.map((param) => possibleStore.fetchPossibleOptions(param))
        );

        myFilterOptions.value = possibleStore.options;
      } catch (error) {
        console.error(
          "Hiba történt a lehetséges opciók betöltése közben:",
          error
        );
      } finally {
        loadingStore.setLoading(false);
      }
    };
    onMounted(() => {
      loadOptions();
    });

    const loadProducts = async () => {
      try {
        loadingStore.setLoading(true);
        products.value = await productsStore.fetchProducts();
        rows.value = createRows(products.value);
      } catch (error) {
        toast.error("Hiba történt a hírek letöltése közben.");
      } finally {
        loadingStore.setLoading(false);
      }
    };

    const applyFilter = (filter: any) => {
      const filteredProducts = products.value.filter((product: Product) => {
        let result = true;
        Object.keys(filter).forEach((key) => {
          if (filter[key] !== "" && product[key] !== filter[key]) {
            result = false;
          }
        });
        return result;
      });
      rows.value = createRows(filteredProducts);
    };

    const header = ref<TableHeader[]>([
      {
        name: "image",
        type: "image",
        label: "Kép",
        sortable: false,
        width: "1fr",
      },
      {
        name: "brand",
        type: "text",
        label: "Név",
        sortable: true,
        width: "1fr",
      },
      {
        name: "width",
        type: "text",
        label: "Méret",
        sortable: true,
        width: "1fr",
      },
      {
        name: "price",
        type: "text",
        label: "Ár",
        sortable: true,
        width: "1fr",
      },
      {
        name: "stock",
        type: "text",
        label: "Raktárkészlet",
        sortable: true,
        width: "1fr",
      },
      {
        name: "action",
        type: "action",
        label: "",
        sortable: false,
        width: "auto",
      },
    ]);

    loadProducts();

    return { rows, header, myFilterOptions, applyFilter,productsStore };
  },
};
</script>