export default function CustomList({ data, renderItem, renderTitle }) {
  return (
    <div>
      {renderTitle ? renderTitle() : <h1>Default title</h1>}
      {data.map((item) => {
        return renderItem ? renderItem(item) : <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
