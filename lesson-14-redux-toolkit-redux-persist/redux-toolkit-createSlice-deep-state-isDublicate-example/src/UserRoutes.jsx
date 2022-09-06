import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PostsPage = lazy(() => import('./pages/PostsPage/PostsPage'));
const MyBooksPage = lazy(() => import('./pages/MyBooksPage/MyBooksPage'));
const MyFavoriteBooksPage = lazy(() => import('./pages/MyFavoriteBooksPage/MyFavoriteBooksPage'));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage/SinglePostPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/my-books" element={<MyBooksPage />} />
                <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
                <Route path="/posts/:id" element={<SinglePostPage />}>
                    <Route path="comments" element={<CommentsPage />} />
                </Route>
                
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;