import client from "../../../client";
import { SanityPost, PostModel, SanityAuthor, AuthorModel } from "../types";

function SanityPostToPostModel(sanityPost: SanityPost): PostModel {
    return {
        title: sanityPost.title,
        slug: sanityPost.slug,
        author: sanityPost.author,
        excerpt: sanityPost.excerpt,
        categories: sanityPost.categories,
        date: sanityPost._createdAt,
        image: sanityPost.image,
        content: sanityPost.body,
        featured: sanityPost.featured
    }
}

function SanityAuthorToAuthorModel(authorPost: SanityAuthor): AuthorModel {
    return {
        name: authorPost.name,
        image: authorPost.image,
        description: authorPost.bio,
        url: authorPost.url
    }
}

export async function getSinglePost(slug: string): Promise<PostModel> {
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt, 
        "slug":slug.current,
        "author": author->name,
        "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
        _createdAt,
        featured,
        "categories": categories[]->title,
        "image": mainImage.asset->url,
        body
    }`, { slug }) as SanityPost
    return SanityPostToPostModel(post)
}

export async function getAllPosts(): Promise<PostModel[]> {
    const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc){
        title,
        excerpt,
        "slug":slug.current,
        "author": author->name,
        _createdAt,
        featured,
        "categories": categories[]->title,
        "image": mainImage.asset->url,
        body
    }`)

    return posts.map((post: SanityPost) => SanityPostToPostModel(post))
}

export async function getFeaturedPosts(): Promise<PostModel[]> {
    const featuredPosts = await client.fetch(`*[_type == "post" && featured==true] {
        title,
        excerpt,
        "slug":slug.current,
        "author": author->name,
        _createdAt,
        featured,
        "categories": categories[]->title,
        "image": mainImage.asset->url,
        body
    }`)
    return featuredPosts.map((post: SanityPost) => SanityPostToPostModel(post))
}

export async function getLatestsPosts(): Promise<PostModel[]> {
    const allPosts = await getAllPosts()
    const latestsPosts = allPosts.slice(0, 3)
    return latestsPosts
}

export async function getAuthor(name: string): Promise<AuthorModel> {
    const author = await client.fetch(`*[_type == "author" && name=='Elena Bao'][0]{
        name, 
        "slug": slig.current,
        bio,
        url,
        "image": image.asset->url
    }`) as SanityAuthor

    return SanityAuthorToAuthorModel(author)
}