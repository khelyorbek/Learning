const App = () => (
  <div>
    <Order item="pizza" restaurant="Dominos" />
    <Order item="bread" restaurant="Panera" />
  </div>
);

ReactDOM.render(<App/>,
  document.getElementById("root")); 
