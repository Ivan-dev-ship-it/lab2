import api from "./instance";

export const getAll = () => api.get("/api/posts").then(r => r.data);

export const update = (id, data) => api.patch(`/api/posts/${id}`, data).then(r => r.data);
