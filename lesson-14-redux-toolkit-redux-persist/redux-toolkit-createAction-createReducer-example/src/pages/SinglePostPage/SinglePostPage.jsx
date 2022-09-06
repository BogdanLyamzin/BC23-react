import {useState, useEffect} from "react";
import {Link, useParams, useNavigate, Outlet, useLocation} from "react-router-dom";

import { getPostById } from "../../shared/api/posts";

const singlePageRegexp = /^\/posts\/\d$/

const SinglePostPage = () => {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from || "/posts";

    useEffect(()=> {
        const fetchPost = async() => {
            try {
                setLoading(true);
                setError(null);

                const result = await getPostById(id);
                setState(result);
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchPost()
    }, [setState, setLoading, setError, id]);

    const goBack = () => navigate(from);

    const isSingelPage = singlePageRegexp.test(location.pathname);

    const commentsLink = isSingelPage ? `/posts/${id}/comments` : `/posts/${id}`;

    return (
        <div className="container">
            <button onClick={goBack}>Go back</button>
            {loading && <p>...Loading</p>}
            {state && (<>
                <h1 className="page-title">{state.title}</h1>
                <p>{state.body}</p>
                <Link state={{from}} to={commentsLink}>Comments</Link>
                <Outlet />
            </>)}
        </div>
    )
}

export default SinglePostPage;