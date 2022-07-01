const Order = (props) => {
  return (
    <div>
      <p>Your Order: </p>
      <p>I'd like {props.item} from {props.restaurant}</p>
    </div>
  );
}
