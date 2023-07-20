import { Product } from "../types/product";
import { TableRow } from "../types/table";

export const createRows = (products: Product[]): TableRow[] => {
  return products.map((product: Product) => ({
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
        postFix: " Ft",
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
};