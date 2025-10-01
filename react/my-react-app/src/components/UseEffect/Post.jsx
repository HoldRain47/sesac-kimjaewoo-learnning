// src/components/DataFetching/Post.jsx

export default function Post({ post }, key) {
  return (
    <li key={post.id}>
      No. {key}
      {post.id} {post.title}
    </li>
  );
}
