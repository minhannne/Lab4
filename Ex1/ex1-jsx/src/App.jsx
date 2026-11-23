import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router'
import PeopleLayout from './PeopleLayout'
import './App.css'

function Layout() {
  return (
    <>
      <nav aria-label="Điều hướng chính">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
        <NavLink to="/people" className={({ isActive }) => (isActive ? 'active' : '')}>
          People
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />

          <Route path="people" element={<PeopleLayout />}>
            <Route index element={<p>Chọn một người trong danh sách.</p>} />
            <Route path=":id" element={<p>Chi tiết sẽ được thêm ở bước sau.</p>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}