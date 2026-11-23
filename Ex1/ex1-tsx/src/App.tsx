import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router'
import './App.css'
import { lazy, Suspense } from 'react'
import PeopleLayout from './PeopleLayout'
import { people } from './people'
const PersonDetail = lazy(() => import('./PersonDetail'))

function PersonDetailSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <h2>Thông tin chi tiết</h2>
      <dl aria-hidden="true">
        <dt>Tên</dt>
        <dd><span className="skeleton-bar" /></dd>
        <dt>Vai trò</dt>
        <dd><span className="skeleton-bar" /></dd>
      </dl>
    </div>
  )
}
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
            <Route
              path=":id"
              element={
                <Suspense fallback={<PersonDetailSkeleton />}>
                  <PersonDetail people={people} />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}