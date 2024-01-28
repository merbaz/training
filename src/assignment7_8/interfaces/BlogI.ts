interface BlogI {
    title: string,
    userId: string,
    content: string,
    createdOn?: Date,
    lastUpdatedOn?: Date,
    views?: number,
    rating?: number,
    tags?: string[]
}

export default BlogI;