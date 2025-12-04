import { useEffect, useState } from "react";
import * as api from "../api/profileApi";

export default function useProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await api.getProfile();
        setUser(data);
      } catch (err) {
        setError("Ошибка загрузки профиля");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const updateUser = async (updatedFields) => {
    try {
      const updatedUser = await api.updateProfile(updatedFields);
      setUser(updatedUser);
    } catch (err) {
      console.error("Ошибка обновления профиля:", err);
    }
  };

  return { user, loading, error, updateUser };
}
