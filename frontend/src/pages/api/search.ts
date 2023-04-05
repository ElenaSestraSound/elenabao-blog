// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PostModel } from '@/lib/types'
import { searchPosts } from '@/lib/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostModel[] | Error>
) {
  if (req.method === 'POST') {
    const keywords = req.body
    try {
      const posts = await searchPosts(keywords)
      return res.status(200).json(posts)
    } catch (err) {
      return res.status(404).json({ message: "Something went wrong" })
    }
  }
  return res.status(404).json({ message: "Requested endpoint was not found" })
}
