export default function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Playtime</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={value.slug} onClick={(event) => console.log(value.id)}>
            <td>{value.name}</td>
            <td>{value.playtime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
