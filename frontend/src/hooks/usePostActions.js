import { useState } from "react";
import * as api from "../api/postsApi";

export default function usePostActions(post, onUpdate) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = async () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    try {
      await api.update(post.id, { likes: updatedLikes });
      onUpdate?.({ ...post, likes: updatedLikes });
    } catch (err) {
      console.error("Ошибка при отправке лайка:", err);
    }
  };

  const handleAddComment = async () => {
    const trimmedComment = newComment.trim();
    if (!trimmedComment) return;

    const newCommentObj = {
      id: Date.now(),
      author: "Вы",
      text: trimmedComment,
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    setNewComment("");

    try {
      await api.update(post.id, { comments: updatedComments });
      onUpdate?.({ ...post, comments: updatedComments });
    } catch (err) {
      console.error("Ошибка при отправке комментария:", err);
    }
  };

  return { likes, comments, newComment, setNewComment, handleLike, handleAddComment };
}
