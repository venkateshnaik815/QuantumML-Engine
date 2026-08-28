import axios from 'axios';

export const coreApi = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot Auth & Projects
});

export const mlApi = axios.create({
  baseURL: 'http://localhost:8000', // FastAPI ML Services
});
