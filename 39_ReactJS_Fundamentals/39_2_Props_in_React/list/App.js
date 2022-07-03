const App = () => (
  <div>
    <List name="Shopping List" items={["Salsa", "Avocado", "Beans"]} />
    <List name="Todo List" items={["Learn React", "Feed cats"]} />
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
