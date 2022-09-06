import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getComments } from "../../shared/api/posts";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        const fetchComments = async() => {
            try {
                setLoading(true);
                const result = await getComments(id);
                setComments(result);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchComments()
    }, []);

    const elements = comments.map(({id, name, email, body}) => (
        <li key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </li>
    ))

    return (
        <div className="container">
            <h1 className="page-title">Comments page</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default CommentsPage;