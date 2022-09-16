const fields = {
    name: {
        label: "User name",
        name: "name",
        type: "text",
        placeholder: "Enter user name",
        required: true,
    },
    email: {
        label: "User email",
        name: "email",
        type: "email",
        placeholder: "Enter user email",
        required: true,
    },
    password: {
        label: "User password",
        name: "password",
        type: "password",
        placeholder: "Enter user password (min 6 symbols)",
        required: true,
    }
}

export default fields;