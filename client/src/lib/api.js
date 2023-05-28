import axios from "axios";

// LEMBRAR DE MUDAR O ENDEREÇO IP 192.168....
export const api = axios.create({
    baseURL: "http://192.168.18.7:3001"
})