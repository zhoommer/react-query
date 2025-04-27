import usePostList from "../hooks/usePostList"

export default function PostList() {
  const { status, data, error } = usePostList();


  if (status === "pending") return <span>Loading...</span>

  if (status === "error") return <span>An error occurred, {error.message}</span>

  return (
    <>
      {
        data.map((post) => (
          <div key={post.id}>{post.body}</div>
        ))
      }
    </>
  )
}
