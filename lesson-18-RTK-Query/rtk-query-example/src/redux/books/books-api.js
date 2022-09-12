import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
    reducerPath: "booksApi",
    tagTypes: ["Books"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
    }),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        fetchBooks: builder.query({
            query: (page) => `/?page=${page}&limit=10`,
            providesTags: (result) => result ? [
                ...result.map(({id}) => ({type: "Books", id})), 
                {type: "Books", id: "LIST"}
            ] : [{type: "Books", id: "LIST"}]
        }),
        addBook: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: [{type: "Books", id: "LIST"}]
        })
    })
});

export const {useFetchBooksQuery, useAddBookMutation} = booksApi;

export default booksApi;