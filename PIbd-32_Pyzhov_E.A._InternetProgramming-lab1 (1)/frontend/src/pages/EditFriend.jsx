import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FriendForm from "../components/FriendForm";

const api = axios.create({ baseURL: "http://localhost:5174" });

export default function EditFriend({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    if (mode === "edit") {
      api.get(`/api/friends/${id}`)
        .then(res => setInitial(res.data))
        .catch(() => {
          alert("Друг не найден");
          navigate("/friends");
        });
    }
  }, [mode, id, navigate]);

  const handleSubmit = async (data) => {
    try {
      if (mode === "edit") {
        await api.put(`/api/friends/${id}`, data);
      } else {
        await api.post("/api/friends", data);
      }
      navigate("/friends");
    } catch (err) {
      alert("Ошибка при сохранении");
      console.error(err);
    }
  };

  return (
    <div className="container py-4 text-dark">
      <h2>{mode === "edit" ? "Редактировать друга" : "Добавить друга"}</h2>
      {mode === "edit" && !initial
        ? <p>Загрузка…</p>
        : <FriendForm
            onSubmit={handleSubmit}
            editingFriend={mode === "edit" ? initial : null}
          />
      }
    </div>
  );
}
