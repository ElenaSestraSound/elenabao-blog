export type NavMenuItemModel = {
    name: string,
    to: string
}

export type PostModel = {
    title: string,
    slug: string,
    author: string,
    categories: string[],
    date: string,
    image: string,
    content: string,
    featured: boolean
}

export type AuthorModel = {
    name: string,
    image: string,
    description: string,
    url?: string
}