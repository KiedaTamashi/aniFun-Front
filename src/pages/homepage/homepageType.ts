export interface INews {
    id: number
    title:string
    msg:string
}

export interface INewBoardInfo {
    coverUrl:string
    news: INews[]
}

export interface IScoredItem {
    id: number
    ranking?: number
    name: string
    score: number
    imgurl: string
}