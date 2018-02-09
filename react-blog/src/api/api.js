import axios from 'axios';
export const getasideRouter = () => axios.get('/v1/main/info').then(res => res.data).catch(err => console.log(err));
