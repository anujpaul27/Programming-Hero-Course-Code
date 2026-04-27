
export default async function getAllPosts() {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(!posts.ok)
    {
        throw new Error('All Post feaching Problem..')
    }
    return posts.json()
}
