import {nanoid} from 'nanoid';

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/my-books",
        text: "My Books"
    },
    {
        id: nanoid(),
        to: "/my-favorite-books",
        text: "My favorite books"
    },
];

export default items;
