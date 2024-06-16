const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />;
      <Form />;
      <PackageList />;
      <Stats />;
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 🤩 trip</h3>
    </div>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        <span>Hello</span>
      </ul>
    </div>
  );
}

function Item(item) {
  <li>
    <span>Hello</span>
  </li>;
}
function Stats() {
  return (
    <footer>
      <em>👜 You have X items on your list,and you already packed X(X%)</em>
    </footer>
  );
}
