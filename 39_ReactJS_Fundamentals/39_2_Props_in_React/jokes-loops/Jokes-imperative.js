const JokesLoop = () => {
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
  const jokeList = [];

  for (let joke of jokes) {
    jokeList.push(<li>{joke.text}</li>);
  }

  return <ul>{jokeList}</ul>;
};
