const JokesMap = () => {
  const jokes = [
    {
      id: 1,
      text: "How do you comfort a JavaScript bug? You console it!"
    },
    {
      id: 2,
      text: "Why did the developer quit? Because he didn't get arrays"
    }
  ];
  return (
    <ul>
      { jokes.map(j => <li>{j.text}</li>) }
    </ul>
  );
}