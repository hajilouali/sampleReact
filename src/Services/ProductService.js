import axios from "axios";

const API_URL ="http://localhost:9000/";


export const GetAllProducts=()=>{
    return axios.get(`${API_URL}Products`)
}
export const GetProduct=(ProductId)=>{
    return axios.get(`${API_URL}Products/${ProductId}`)
}
export const CreatProduct=(Product)=>{
    return axios.post(`${API_URL}Products`,Product)
}
export const DeleteProduct=(ProductId)=>{
    return axios.delete(`${API_URL}Products/${ProductId}`)
}
export const UpdateProduct=(Product,ProductId)=>{
    return axios.put(`${API_URL}Products/${ProductId}`,Product)
}