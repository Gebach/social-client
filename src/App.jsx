import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import MainPage from './pages/MainPage'
import PageWrapper from './components/PageWrapper/PageWrapper'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<LoginForm />} />
          <Route path="profile/:uid" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
