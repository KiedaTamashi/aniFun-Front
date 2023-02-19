export interface IDiscoverImage {
    id: number
    url:string
    name: string
    tag: string[]
}
export interface IDiscoverState {
    imgNum: number
    dataList: IDiscoverImage[]
}