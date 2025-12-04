import api from "./instance";

export const getProfile = () =>
  api.get("/api/users/1").then((res) => res.data);

export const updateProfile = (data) =>
  api.patch("/api/users/1", data).then((res) => res.data);
