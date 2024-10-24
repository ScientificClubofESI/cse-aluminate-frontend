import axios from "axios";

const api = axios.create({
    baseURL: "process.env.NEXT_PUBLIC_API_URL"
})

export const fetchProducts = async () => {
    const { data } = await api.get('/products');
    return data;
};