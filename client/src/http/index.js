import axios from "axios";

export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const createTour = async (tour) => {
    console.log(tour, " :post send tour");
    const {data} = await $host.post('/tour/create', tour);
    return data;
}

// export const createTour = (tour) => {
//   console.log(tour, " :post send tour");
// };

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
