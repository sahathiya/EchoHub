import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://echohub-d780.onrender.com', 
  withCredentials: true,

  
});


export default axiosInstance;