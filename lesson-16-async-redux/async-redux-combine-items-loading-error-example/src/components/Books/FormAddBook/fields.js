const fields = {
    title: {
        label: "Название книги",
        name: "title",
        type: "text",
        placeholder: "Введите название книги",
        required: true,
    },
    author: {
        label: "Автор книги",
        name: "author",
        type: "text",
        placeholder: "Введите автора книги",
        required: true,
    },
    favorite: {
        label: "Любимая",
        name: "favorite",
        type: "checkbox",
    }
}

export default fields;