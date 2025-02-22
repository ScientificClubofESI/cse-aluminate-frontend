import axios from "axios";

const api = axios.create({
  baseURL: "process.env.NEXT_PUBLIC_API_URL",
});

export const getAllAlumni = async (page) => {
  const { data } = await api.get(
    `http://localhost:5000/v2/alumni?page=${page}`
  );
  return data;
};

export const getAlumniById = async (id) => {
  console.log(id);
  const { data } = await api.get(`http://localhost:5000/v2/alumni/${id}`);
  return data;
};

export const getPopularServices = async () => {
  const { data } = await api.get("http://localhost:5000/v2/service/popular");
  console.log("popular services : ", data);

  return data;
};
