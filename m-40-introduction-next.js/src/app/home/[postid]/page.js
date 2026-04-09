const PostPage = async ({ params }) => {
  const { postid } = await params;

  return <div>Post page {postid}</div>;
};

export default PostPage;
