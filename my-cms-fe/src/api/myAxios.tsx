import axios from "axios";
const my_axios = axios;

my_axios.defaults.withCredentials = true;

export default my_axios;