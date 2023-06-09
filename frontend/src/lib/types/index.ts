export type NavMenuItemModel = {
    name: string,
    to: string
}

export type SanityPost = {
    title: string,
    slug: string,
    author: string,
    excerpt: string,
    publishedAt: string,
    featured: boolean,
    categories: string[],
    image: string,
    body: []
}

export type PostModel = {
    title: string,
    slug: string,
    author: string,
    excerpt?: string,
    categories: string[],
    date: string,
    image: string,
    content: [],
    featured: boolean
}

export type SanityAuthor = {
    name: string,
    slug: string,
    image: string,
    url: string,
    bio: []
}

export type AuthorModel = {
    name: string,
    image: string,
    description: [],
    url?: string
}