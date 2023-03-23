import { SanityPost, PostModel } from "../types";

export function SanityPostToPostModel(sanityPost: SanityPost): PostModel {
    return {
        title: sanityPost.title,
        slug: sanityPost.slug,
        author: sanityPost.author,
        categories: sanityPost.categories,
        date: sanityPost._createdAt,
        image: sanityPost.image,
        content: sanityPost.body,
        featured: sanityPost.featured
    }
}