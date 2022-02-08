import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.57:3333'
});

const apiStation = axios.create({
  baseURL: 'http://192.168.100.57:3000'
});

export {api, apiStation};