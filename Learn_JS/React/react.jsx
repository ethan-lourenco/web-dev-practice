{
  // May 21st 2025}
}

{
  /* Props
     - short for properties, is the way for parent
       components to pass data down to child components
  */
}

function App() {
  return (
    <>
      <Greeting name="Jessica" />;
      <Greeting name="Tom" />;
      <Greeting name="Oliver" />;
    </>
  );
}

export default App;

function Greeting({ name }) {
  return <h1>Hi {name}!</h1>;
}

{
  /* Conditional Rendering
     - allows you to create dynamic interfaces, it is used
       to show different content based on certain conditions
       or states within your application
  */
}

function Greet({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

{
  /* The map() Method
     - used to transform an array of data into an array of JSX
       elements that can be rendered in the UI
  */
}

{
  /* The key Prop
     - must always be unique and it helps React identify which items
       have changed, been added, or been removed, which is essential
       for efficiently rendering and updating the list
  */
}

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}

function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

{
  /* Inline Styles
     - used to apply CSS styles directly to React elements within your
       JSX code instead of defining them in separate CSS files
  */
}

function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return <button style={defaultStyles}>{buttonText}</button>;
}
