import React from "react";
// @ts-ignore
import Modal from "react-bootstrap/Modal";
import useCountries from "../hooks/useCountries"; 

const ProfileModal = ({
  show,
  onHide,
  firstName,
  lastName,
  description,
  country,
  avatar,
  setFirstName,
  setLastName,
  setDescription,
  setCountry,
  setAvatar,
  saveChanges,
}) => {
  const { countries } = useCountries(); 

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Редактировать профиль</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Фамилия</label>
          <input
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Описание</label>
          <textarea
            className="form-control"
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Страна</label>
          <select
            className="form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Выберите страну</option>
            {countries.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Аватар</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={onImageChange}
          />
          {avatar && (
            <div className="mt-3 text-center">
              <img
                src={avatar}
                alt="Новый аватар"
                className="rounded-circle border"
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <button className="btn btn-success w-100" onClick={saveChanges}>
          Сохранить
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
