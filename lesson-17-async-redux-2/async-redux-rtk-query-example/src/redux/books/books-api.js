import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/"
        })
    })
});

export const {useGetBooksQuery} = booksApi;

export default booksApi;