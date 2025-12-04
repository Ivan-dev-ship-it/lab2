import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendCard from "../components/FriendCard";
import useFriends from "../hooks/useFriends";
import useCountries from "../hooks/useCountries";

export default function Friends() {
  const navigate = useNavigate();
  const { friends, loading, error, removeFriend } = useFriends();
  const { countries } = useCountries(); 
  const [selectedCountryId, setSelectedCountryId] = useState(""); 

  const handleDelete = (id) => {
    if (!window.confirm("Удалить друга?")) return;
    removeFriend(id);
  };

  const handleEdit = (friend) => {
    navigate(`/friends/edit/${friend.id}`, { state: { friend } });
  };

  const handleAdd = () => {
    navigate("/friends/add");
  };

  const filteredFriends = selectedCountryId
    ? friends.filter((f) => f.countryId === selectedCountryId)
    : friends;

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Список друзей</h1>
        <div className="d-flex gap-3">
        <div className="d-flex gap-3 align-items-center">
      <select
        className="form-select"
        value={selectedCountryId}
        onChange={(e) => setSelectedCountryId(e.target.value)}
        style={{ width: "200px" }} 
      >
        <option value="">Все страны</option>
        {countries.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
  
      <button
        className="btn btn-success"
        onClick={handleAdd}
        style={{ width: "200px" }} 
      >
        <i className="bi bi-plus-circle" /> Добавить друга
      </button>
</div>

        </div>
      </div>

      <div className="d-flex flex-wrap gap-5" style={{ justifyContent: "space-between" }}>
        {filteredFriends.map((f) => (
          <FriendCard
            key={f.id}
            Friend={f}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
