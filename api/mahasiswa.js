import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
})

const apis  = {
        getAllMahasiswa: () => api.get('/siswa'),
        getMahasiswaByNim: () => api.get('/siswa/${nim}'),
}
 
export default apis;