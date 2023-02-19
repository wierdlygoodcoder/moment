import axios from "axios";

axios.defaults.baseURL = 'https://taskmanager954.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true