import { useEffect, useState } from "react";
import * as api from "../api/friendsApi";

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsData = await api.getAll();
        setFriends(friendsData);
      } catch (err) {
        setError("Ошибка загрузки друзей");
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const removeFriend = async (id) => {
    try {
      await api.remove(id);
      setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id));
    } catch (err) {
      console.error("Ошибка при удалении друга:", err);
    }
  };

  return { friends, loading, error, removeFriend };
}
