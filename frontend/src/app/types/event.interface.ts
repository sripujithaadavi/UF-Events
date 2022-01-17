export type Event = {
    header: string,
    secheader: string,
    desc: string,
    sampledesc: string,
    postedby: string,
    postedon: string,
    price: number,
    category: string,
    address: string,
    imageUrl: string,
    eventon: string,
    upvoted?: boolean
}

export type EventResp = {
    events: Event[]
}