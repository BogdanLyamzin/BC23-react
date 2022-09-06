import { ADD_BOOK, REMOVE_BOOK } from "./items-types";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });

    return Boolean(result);
}

const itemsReducer = (store = [], {type, payload})=> {
    switch(type) {
        case ADD_BOOK:
            if(isDublicate(payload, store)){
                alert(`${payload.title} - ${payload.author} is already exist`);
                return store;
            }
            return [...store, payload];
        case REMOVE_BOOK:
            return store.filter(item => item.id !== payload);
        default: 
            return store;
    }
};

export default itemsReducer;