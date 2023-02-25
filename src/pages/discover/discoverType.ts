export interface IDiscoverImage {
    id: number
    url:string
    name: string
    tag: string[]
}

export interface IDiscoverRow {
    rowId: number
    imgNum: number
    rowList: IDiscoverImage[]
}