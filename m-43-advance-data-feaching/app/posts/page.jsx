import React from 'react';
import getAllPosts from '../lib/getAllPosts';
import Link from 'next/link';

const PostsPage = async () => {
    const posts = await getAllPosts()
    return (
        <div>
            All Posts Title show over here
            {
                posts.map(post =>
                    <li className='my-2 bg-gray-800 rounded-2xl p-2 text-center  ' key={post.id}> <Link href={`/posts/${post.id}`}>{post.title}</Link> </li>
                )
            }
        </div>
    );
};

export default PostsPage;