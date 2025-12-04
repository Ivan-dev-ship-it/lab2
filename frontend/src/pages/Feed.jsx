// pages/Feed.jsx
import React from "react";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";

export default function Feed() {
  const { posts, loading, error, updatePost } = usePosts();

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Linecons_newspaper.svg/1200px-Linecons_newspaper.svg.png"
          alt="Новости"
          width="80"
          height="80"
        />
        <h1 className="fw-bold text-dark">Новости</h1>

      </div>

      {loading ? (
        <div className="text-center">Загрузка...</div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-muted">Пока нет публикаций</div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onUpdate={updatePost} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
