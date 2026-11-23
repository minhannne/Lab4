import { useParams } from 'react-router'
import type { Person } from './people'

type PersonDetailProps = {
  people: Person[]
}

export default function PersonDetail({ people }: PersonDetailProps) {
  const { id } = useParams<'id'>()
  const person = people.find((item) => item.id === id)

  if (!person) {
    return <h2>404 — Không tìm thấy người này</h2>
  }

  return (
    <>
      <h2>Thông tin chi tiết</h2>
      <dl>
        <dt>Tên</dt>
        <dd>{person.name}</dd>
        <dt>Vai trò</dt>
        <dd>{person.role}</dd>
      </dl>
    </>
  )
}