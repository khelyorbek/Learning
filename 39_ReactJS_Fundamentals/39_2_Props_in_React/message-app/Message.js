const Message = ({ from = "Marissa", messageText }) => {
  return (
    <p>
      {from} says {messageText}
    </p>
  );
};
