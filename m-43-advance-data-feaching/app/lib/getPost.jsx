export default async function  getPost (id) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache:'force-cache'
    })
    return post.json()
}