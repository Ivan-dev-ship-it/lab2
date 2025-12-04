import api from "./instance";

export const getAll = () => api.get("/api/groups").then(r => r.data);