import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import {Sidebar} from './components/Sidebar/Sidebar'
import {PostsPage} from './pages/PostsPage/PostsPage'
import {CreatePostPage} from './pages/CreatePostPage/CreatePostPage'
import {MyPostsPage} from './pages/MyPostsPage/MyPostsPage'
import {DeletedPostsPage} from './pages/DeletedPostsPage/DeletedPostsPage'
import {setAuthToken} from "./api/axios"
import './App.scss'
import {AppRoutes} from "./default-config/appRoutes"
import {TestViewPage} from "./components/TestViewPage/TestViewPage"
import {useAppSelector} from "./store/hooks"


export default function App() {
    // const selector = userSelectors.selectAuthUser
    // const authUser2 = useSelector(selector)
    const {authUser} = useAppSelector(state => state.users)
    // const authUser = {name: 'testUser1', password: 'yourpassword'}
    setAuthToken(authUser)
    // const isAuth = useSelector(selectIsAuth)
    const isAuth = true

    return (
        <Router>
            <div className="App" key={authUser.name}>
                <Sidebar/>
                <main className="App__main">
                    <Routes>
                        <Route path={AppRoutes.defaultPage}
                               element={
                                   <Navigate to={isAuth ? AppRoutes.myPostsPage : AppRoutes.loginPage}/>
                               }
                        />
                        <Route path={AppRoutes.postsPage} element={<PostsPage/>}/>
                        <Route path={AppRoutes.createPostPage} element={<CreatePostPage/>}/>
                        <Route path={AppRoutes.myPostsPage} element={<MyPostsPage/>}/>
                        <Route path={AppRoutes.deletedPostsPage} element={<DeletedPostsPage/>}/>
                        <Route path={AppRoutes.testViewPage} element={<TestViewPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}
