import React, { useEffect, useState } from "react";
import useCountries from "../hooks/useCountries";  
import useGroups from "../hooks/useGroups";        

const defaultForm = {
  firstName: "",
  lastName: "",
  countryId: "",
  groupId: "",
  avatar: "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevcx0f/image-3.jpg"
};

function FriendForm({ onSubmit, editingFriend }) {
  const { countries, loading: countriesLoading, error: countriesError } = useCountries();
  const { groups, loading: groupsLoading, error: groupsError } = useGroups();
  const [form, setForm] = useState(defaultForm);
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    if (editingFriend) {
      setForm(editingFriend);
      setAvatarPreview(editingFriend.avatar);
    } else {
      setForm(defaultForm);
      setAvatarPreview("");
    }
  }, [editingFriend]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        setForm({ ...form, avatar: result });
        setAvatarPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(defaultForm);
    setAvatarPreview("");
  };

  if (countriesLoading || groupsLoading) return <div>Загрузка...</div>;

  if (countriesError || groupsError) return <div className="text-danger">Ошибка загрузки данных</div>;

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <input
            className="form-control"
            name="firstName"
            placeholder="Имя"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="lastName"
            placeholder="Фамилия"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-control"
            name="countryId"
            value={form.countryId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите страну</option>
            {countries && countries.length > 0 && countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <select
            className="form-control"
            name="groupId"
            value={form.groupId}
            onChange={handleChange}
            required
          >
            <option value="">Выберите группу</option>
            {groups && groups.length > 0 && groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>

        <div className="col-md-6">
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Превью"
              className="img-thumbnail"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          )}
        </div>
      </div>

      <button className="btn btn-success mt-3" type="submit">
        {editingFriend ? "Сохранить изменения" : "Добавить друга"}
      </button>
    </form>
  );
}

export default FriendForm;
