// components/PostCard.jsx
import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import usePostActions from "../hooks/usePostActions";

export default function PostCard({ post, onUpdate }) {
  const { likes, comments, newComment, setNewComment, handleLike, handleAddComment } = usePostActions(post, onUpdate);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <img
            src={post.avatar || "https://via.placeholder.com/50"}
            alt="Avatar"
            className="rounded-circle me-2"
            width="50"
            height="50"
          />
          <div>
            <h5 className="mb-0">{post.username || "Аноним"}</h5>
            <small className="text-muted">{post.timeAgo || "Недавно"}</small>
          </div>
        </div>

        <p>{post.text}</p>

        {post.image && (
          <img
            src={post.image}
            className="img-fluid rounded mb-2"
            alt="Post visual"
          />
        )}

        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-outline-primary" onClick={handleLike}>
            <Heart size={16} className="me-1" />
            {likes}
          </button>
          <button className="btn btn-outline-primary" disabled>
            <MessageCircle size={16} className="me-1" />
            {comments.length}
          </button>
        </div>

        <div className="mb-3">
          {comments.map((c, i) => (
            <div key={i} className="border rounded p-2 mb-1 bg-light">
              <strong>{c.author}:</strong> {c.text}
            </div>
          ))}
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Оставить комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={handleAddComment}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
