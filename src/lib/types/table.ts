export interface TableHeader{
    name: string,
    type: string,
    label: string,
    sortable?: boolean,
    width?: string,
}


export interface TableCell{
    name: string,
    type: "image" | "text",
    value: any,
    label: any,
}

export interface TableRow{
    id: number,
    cells: TableCell[],
}

export interface Table{
    headers: TableHeader[],
    rows: TableRow[],
}
