import Cookies from "js-cookie";
import * as jwtDecode from "jwt-decode";


const getToken = () => {
    const token = Cookies.get('token');
    return token
};

const getTokenDecode = () => {
    const token = Cookies.get('token');
    const dataUserDecoded = jwtDecode(token)
    return dataUserDecoded
};

const API_BASE_URL = 'https://api-best-browser-games-github-luisbarrichello.vercel.app'

export default { getToken, getTokenDecode, API_BASE_URL }