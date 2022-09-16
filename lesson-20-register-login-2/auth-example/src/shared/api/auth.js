import axios from "axios";

const instance = axios.create({
    baseURL: "https://auth-backend-lesson.herokuapp.com/api"
});

const setToken = (token) => {
    if(token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const signup = async(data) => {
    const {data: result} = await instance.post("/users/signup", data);
    setToken(result.token);
    return result;
}

export const login = async(data) => {
    const {data: result} = await instance.post("/users/login", data);
    setToken(result.token);
    return result;
}

export const logout = async() => {
    const {data: result} = await instance.post("/users/logout");
    setToken();
    return result;
}

export const getCurrent = async(token) => {
    try {
        setToken(token);
        const {data: result} = await instance.get("/users/current");
        return result;
    } catch (error) {
        setToken();
        throw error;
    }
}

export default instance;