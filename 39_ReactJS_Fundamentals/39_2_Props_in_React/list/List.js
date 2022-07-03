const List = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        {props.items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}
