export default function ShowData({ data }) {
  return (
    <section>
      <h2>Dữ liệu đã gửi</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}