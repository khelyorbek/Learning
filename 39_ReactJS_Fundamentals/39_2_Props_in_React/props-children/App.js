const App = () => (
  <div>
    <CustomGreeting message={"Hello!"}>
      <button>Confirm Greeting</button>
    </CustomGreeting>

    <CustomGreeting message={"Nothing else here!"} />

    <CustomGreeting message={"Lets say nice things!"}>
      Inside this greeting we will give you a compliment
      <ul>
        <li>You are kind!</li>
      </ul>
    </CustomGreeting>
  </div>
);

ReactDOM.render(<App />, 
  document.getElementById("root"));