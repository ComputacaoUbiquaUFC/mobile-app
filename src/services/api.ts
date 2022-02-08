import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.55:3333'
});

const apiStation = axios.create({
  baseURL: 'http://192.168.0.55:3000'
});

export {api, apiStation};