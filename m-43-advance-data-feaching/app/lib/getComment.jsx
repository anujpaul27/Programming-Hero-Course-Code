export default async function getComment(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`, {
        cache: 'no-cache'
    })
    return result.json();
}
