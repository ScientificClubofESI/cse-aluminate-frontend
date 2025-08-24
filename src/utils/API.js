import api from "./axios";


export const getAllAlumni = async (page) => {
  const { data } = await api.get(
    `/v2/alumni?page=${page}`
  );
  return data;
};

export const getAlumniById = async (id) => {
  console.log(id);
  const { data } = await api.get(`/v2/alumni/${id}`);
  return data;
};

export const getPopularServices = async () => {
  const { data } = await api.get("/v2/service/popular");
  console.log("popular services : ", data);

  return data;
};
