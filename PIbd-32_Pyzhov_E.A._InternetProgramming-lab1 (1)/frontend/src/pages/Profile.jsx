import React, { useState } from "react";
import useProfile from "../hooks/useProfile";
import ProfileModal from "../components/ProfileModal";

export default function Profile() {
  const { user, loading, error, updateUser } = useProfile();
  const [modalShow, setModalShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setAvatar] = useState("");

  const openModal = () => {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setDescription(user.description || "");
    setCountry(user.country || "");
    setAvatar(user.avatar || "");
    setModalShow(true);
  };

  const saveChanges = () => {
    updateUser({ firstName, lastName, description, country, avatar });
    setModalShow(false);
  };

  if (loading) return <p className="text-center mt-5">Загрузка…</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!user) return null;

  return (
    <div className="container my-4">
      <div className="card p-4 mx-auto" style={{ maxWidth: 800 }}>
        <div className="text-center mb-3">
          <img
            src={user.avatar}
            alt="Аватар пользователя"
            className="rounded-circle border border-secondary"
            width="150"
            height="150"
          />
          <h1 className="fw-bold mt-2">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-muted">{user.description}</p>
          <p className="text-muted">Страна: {user.country || "Не указана"}</p>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-warning" onClick={openModal}>
            Редактировать профиль
          </button>
        </div>
      </div>

      <ProfileModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        firstName={firstName}
        lastName={lastName}
        description={description}
        country={country}
        avatar={avatar}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setDescription={setDescription}
        setCountry={setCountry}
        setAvatar={setAvatar}
        saveChanges={saveChanges}
      />
    </div>
  );
}
