import "./App.css";
import NewTask from "./components/addnew/addnew";
import Complete from "./components/complete/complete";
import Favorite from "./components/favorite/favorite";
import ToDo from "./components/todo/todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Wrapper">
      <header className="header">
        <h1> Add New Task </h1>
        <NewTask />
      </header>
      <article className="main">
        <h1>To Do List</h1>
        <ToDo />
       </article>
      <aside className="aside aside1">
        <h1>Favorites</h1>
        <Favorite />
      </aside>
      <aside className="aside aside2">
        <h1>Completed</h1>
        <Complete />
      </aside>
          </div>
  );
}

export default App;
