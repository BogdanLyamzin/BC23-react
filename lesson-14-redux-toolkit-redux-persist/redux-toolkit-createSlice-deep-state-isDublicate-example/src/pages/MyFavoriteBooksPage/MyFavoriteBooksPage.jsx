import { useSelector } from "react-redux";

import { getFavoriteBooks } from "../../redux/books/items/items-selectors";

const MyFavoriteBooksPage = () => {
    const books = useSelector(getFavoriteBooks);

    const elements = books.map(({id, title, author}) => (
        <li key={id}>
            {author}. {title}
        </li>
    ))

    return (
        <div className="container">
            <h1 className="page-title">My favorite books page</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default MyFavoriteBooksPage;