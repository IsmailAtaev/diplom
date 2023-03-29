import axios from "axios";

export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const createTour = async (tour) => {
  const { data } = await $host.post("/create", tour);
  return data;
};

export const removeTour = async (tourId) => {
  console.log(tourId);
  const {obj} = await $host.delete(`/remove/${tourId}`);
  console.log("obj: ", obj);
  return obj;
}









const $authHost = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});


$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$authHost.interceptors.response.use((config) => { return config;}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error._isRetry) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get(`http://localhost:5010/api/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          return $authHost.request(originalRequest);
      } catch (e) {
          console.log("DO NOT AUTHORIZATION")
      }
  }
  throw error;
})


export const registrationApi = async (email, password, role, nickName) => {
  return $authHost.post('/api/registration', {email, password, role, nickName});
}


export const loginApi =  async (email, password, nickName) => {
  return $authHost.post('/api/login', {email, password, nickName})
}
