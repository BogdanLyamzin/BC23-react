import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });

    return Boolean(result);
}

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addBook: {
            reducer: (store, {payload}) => {
                if(isDublicate(payload, store)) {
                    alert(`${payload.title} - ${payload.author} is already exist`);
                    return;
                }
                store.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                    }
                }
            }
        },
        removeBook: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
});

export const {addBook, removeBook} = itemsSlice.actions;

export default itemsSlice.reducer;