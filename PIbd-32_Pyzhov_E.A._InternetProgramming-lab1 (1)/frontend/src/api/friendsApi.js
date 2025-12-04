import api from "./instance";

export const getAll = () => api.get("/api/friends").then(r => r.data);

export const remove = (id) => api.delete(`/api/friends/${id}`).then(r => r.data);
