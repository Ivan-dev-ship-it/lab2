import api from "./instance";

export const getAll = () => api.get("/api/countries").then(r => r.data);