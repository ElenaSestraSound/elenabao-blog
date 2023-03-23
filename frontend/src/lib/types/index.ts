export type NavMenuItemModel = {
    name: string,
    to: string
}

export type SanityPost = {
    title: string,
    slug: string,
    author: string,
    _createdAt: string,
    featured: boolean,
    categories: string[],
    image: string,
    body: []
}

export type PostModel = {
    title: string,
    slug: string,
    author: string,
    categories: string[],
    date: string,
    image: string,
    content: [],
    featured: boolean
}

export type AuthorModel = {
    name: string,
    image: string,
    description: string,
    url?: string
}