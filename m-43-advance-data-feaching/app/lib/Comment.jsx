import React from 'react';

const Comment = async ({ promise }) => {
    const comments = await promise

    return (
        <div>
            <div>
                {
                    comments.map(comment =>
                        <li key={comment.id}>{comment.name}</li>
                    )
                }
            </div>
        </div>
    );
};

export default Comment;