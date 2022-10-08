import axios from 'axios'

const token: any = localStorage.getItem('authToken')  || null
const authToken: any = localStorage.getItem('authToken') ? JSON.parse(token) : null
const baseURL = 'https://633ee6f083f50e9ba3bb8e68.mockapi.io/api/v1/characters/'


const apiInstance = axios.create({ baseURL: baseURL });

apiInstance.interceptors.request.use(
  (request:any) => {
    request.headers["Authorization"] = `Bear ${authToken}`;
    return request;
  },
  (err) => err
);

apiInstance.interceptors.response.use(
  (response) => response,
  (err) => { 
    if(!err.response) {
      return Promise.reject({
        status: 999,
        timestamp: new Date(),
        message: "Se ha producido un error inesperado",
        error: "Error inesperado"
      });
    }
    return Promise.reject(err.response.data);
  }
);


export default apiInstance
