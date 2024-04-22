// Import axios
import axios from 'axios';

// Create an instance
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Export the instance
export default instance
