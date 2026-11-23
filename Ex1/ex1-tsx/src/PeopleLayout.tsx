import { Link, Outlet } from 'react-router'
import { people } from './people'

export default function PeopleLayout() {
  return (
    <>
      <h1>People</h1>

      <div className="people-grid">
        <aside aria-labelledby="people-list-title">
          <h2 id="people-list-title">Danh sách</h2>
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                <Link to={person.id}>{person.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="people-detail">
          <Outlet />
        </div>
      </div>
    </>
  )
}