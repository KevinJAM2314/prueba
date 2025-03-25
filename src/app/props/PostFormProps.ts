import { Post } from "../types/Post"

export type PostFormProps = {
    name: string
    create: boolean
    post?: Post
}