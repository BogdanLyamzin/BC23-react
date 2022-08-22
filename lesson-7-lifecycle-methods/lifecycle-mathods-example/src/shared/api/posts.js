import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 12,
    }
});

export const getPosts = async(_page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            _page,
        }
    });
    return data;
}