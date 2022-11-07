// 기본패키지들 임포트
import React, { useEffect } from "react"
import { Provider } from "react-redux"
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
// import store from "./redux/store"
import { store } from "./redux/store"
import setAuthToken from "./redux/auth/auth.utils"
import { loadUser } from "./redux/auth/auth.actions"

// 컴포넌트들(페이지, 콤포, 레이아웃등)을 들고옴
import Header from "./components/Layouts/Header/Header.component"
// import Alert from "./components/Alert/Alert.component"
import HomePage from "./Pages/HomePage/HomePage.component"
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage.component"
import AllTagsPage from "./Pages/AllTagsPage/AllTagsPage.component"
import AllUsersPage from "./Pages/AllUsersPage/AllUsersPage.component"
import Register from "./Pages/Register/Register.component"
import Login from "./Pages/Login/Login.component"
// import Post from "./Pages/Post/Post.component"
import PostForm from "./Pages/PostForm/PostForm.component"
// import TagPage from "./Pages/TagPage/TagPage.component"
// import ProfilePage from "./Pages/ProfilePage/ProfilePage.component"
import NotFound from "./Pages/NotFound/NotFound.component"
import { BaseRoute, LayoutRoute } from "./Router"

// css 추가

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
const titles = {
  // 해당 페이지에 들어갈 타이틀
  "/": "코플로와 - 막히는 부분, 궁금한 부분등을 물어보거나 자신의 지식을 공유해 보아요",
  "/questions": "질문 - 코플로와",
  "/tags": "태그 - 코플로와",
  "/users": "사용자 - 코플로와",
  "/login": "로그인 - 코플로와",
  "/register": "회원가입 - 코플로와",
  "/404": "이런! 페이지를 찾을수가 없어요 - 코플로와",
  "/add/question": "질문하기 - 코플로와",
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  const location = useLocation()
  useEffect(() => (document.title = titles[location.pathname] ?? "코플로와"), [location])

  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        {/* App에 헤더만 있고 사이드, 푸터가 안보이는데
            좌, 우 사이드바, 푸터가 필요한 페이지는 LayoutRoute
            아무것도 안넣을 페이지는 BaseRoute 컴포넌트로 만들어주면된다. 
        */}

        {/* <Alert /> */}
        <Routes>
          {/* 기본틀
          <Route
            exact
            path='/'
            element={
              <LayoutRoute>
                <HomePage />
              </LayoutRoute>
            }
          ></Route> */}

          {/* 홈 */}
          <Route
            exact
            path='/'
            element={
              <LayoutRoute>
                <HomePage />
              </LayoutRoute>
            }
          />

          <Route
            exact
            path='/questions'
            element={
              <LayoutRoute>
                <QuestionsPage />
              </LayoutRoute>
            }
          />

          <Route
            exact
            path='/tags'
            element={
              <LayoutRoute>
                <AllTagsPage />
              </LayoutRoute>
            }
          />

          <Route
            exact
            path='/users'
            element={
              <LayoutRoute>
                <AllUsersPage />
              </LayoutRoute>
            }
          />

          <Route
            exact
            path='/login'
            element={
              <BaseRoute>
                <Login />
              </BaseRoute>
            }
          />

          <Route
            exact
            path='/register'
            element={
              <BaseRoute>
                <Register />
              </BaseRoute>
            }
          />

          <Route
            exact
            path='/add/question'
            element={
              <BaseRoute>
                <PostForm />
              </BaseRoute>
            }
          />

          <Route
            path='/404'
            element={
              <BaseRoute>
                <NotFound />
              </BaseRoute>
            }
          />

          <Route path='*' element={<Navigate to='/404' />} />
          {/* <Route exact path="" element={}/> */}

          {/* 
          <LayoutRoute exact path='/questions/:id' title='Users - 코플로와'>
            <Post />
          </LayoutRoute>
          <LayoutRoute exact path='/users/:id' title='Users - 코플로와'>
            <ProfilePage />
          </LayoutRoute>
          <LayoutRoute exact path='/tags/:tagname' title='Users - 코플로와'>
            <TagPage />
          </LayoutRoute>
          <BaseRoute exact path='/add/question' title='질문하기 - 코플로와'>
            <PostForm />
          </BaseRoute>*/}
        </Routes>
      </div>
    </Provider>
  )
}

export default App
