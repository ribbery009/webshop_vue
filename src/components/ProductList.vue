<template>
  <div class="container flex py-8 mx-auto flex-col">
    <Filter :filterOptions="myFilterOptions" @updateFilter="applyFilter" />
    <Table :rows="rows" :headers="header" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useProductsStore } from "../store/products";
import { toast } from "vue3-toastify";
import { TableHeader, TableRow } from "../lib/types/table";
import { Product } from "../lib/types/product";
import Table from "./table/Table.vue";
import { usePossibleStore } from "../store/possibleValues";
import Filter from "./Filter.vue";

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
    const myFilterOptions = ref({});

    const loadOptions = async () => {
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
      }
    };
    onMounted(() => {
      loadOptions();
    });

    const loadProducts = async () => {
      try {
        products.value = await productsStore.fetchProducts();
        rows.value = products.value.map((product: Product) => ({
          id: product.id,
          cells: [
            {
              name: "image",
              type: "image",
              label: "Kép",
              value: product.image,
            },
            {
              name: "brand",
              type: "text",
              label: product.brand + " " + product.tread,
              value: product.brand,
            },
            {
              name: "width",
              type: "text",
              label:
                product.width +
                " / " +
                product.profile +
                " R " +
                product.diameter,
              value: product.width,
            },
            {
              name: "price",
              type: "text",
              label: product.price,
              value: product.price,
            },
            {
              name: "stock",
              type: "text",
              label: product.stock,
              value: product.stock,
            },
            {
              name: "action",
              type: "action",
              label: "",
              sortable: false,
              value: product.id,
            },
          ],
        }));
      } catch (error) {
        toast.error("Hiba történt a hírek letöltése közben.");
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
      rows.value = filteredProducts.map((product: Product) => ({
        id: product.id,
        cells: [
          {
            name: "image",
            type: "image",
            label: "Kép",
            value: product.image,
          },
          {
            name: "brand",
            type: "text",
            label: product.brand + " " + product.tread,
            value: product.brand,
          },
          {
            name: "width",
            type: "text",
            label:
              product.width +
              " / " +
              product.profile +
              " R " +
              product.diameter,
            value: product.width,
          },
          {
            name: "price",
            type: "text",
            label: product.price,
            value: product.price,
          },
          {
            name: "stock",
            type: "text",
            label: product.stock,
            value: product.stock,
          },
        ],
      }));
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

    return { rows, header, myFilterOptions, applyFilter };
  },
};
</script>