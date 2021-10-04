import axios from axios;
const url = "http://localhost:5000";

export async function login(data) {
  return axios.post(`${url}/login`, data);
}
export async function register(data) {
  return axios.post(`${url}/register`, data);
}
export async function update(emailId,data){
    return axios.put(`${url}/update/${emailId}`, data);
}
export async function book(emailId, data){
    return axios.put(`${url}/book/${emailId}`, data);
}