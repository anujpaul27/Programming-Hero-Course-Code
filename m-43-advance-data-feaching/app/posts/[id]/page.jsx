import Comment from '@/app/lib/Comment';
import getComment from '@/app/lib/getComment';
import getPost from '@/app/lib/getPost';
import React, { Suspense } from 'react';

// Dynamic Metadata 
export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

const PostPage = async ({ params }) => {
    const { id } = await params;
    const post = await getPost(id)
    const PromiseComment = getComment(id)


    return (
        <div className='p-2 text-center '>
            <h1>Post Title: {post.title}</h1>
            <h1>Post Description: {post.body}</h1>
            <hr />

            {/* Show Comments  */}
            {/* <div>
                {
                    PromiseComment.map(comment =>
                        <li key={comment.id}>{comment.name}</li>
                    )
                }
            </div> */}
            <Suspense fallback={<p>loading comments</p>}>
                <Comment promise={PromiseComment} />
            </Suspense>
        </div>
    );
};

export default PostPage;