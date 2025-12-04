import { useEffect, useState } from "react";
import * as api from "../api/postsApi";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await api.getAll();
        setPosts(postsData);
      } catch (err) {
        setError("Ошибка загрузки постов");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return { posts, loading, error, updatePost };
}
