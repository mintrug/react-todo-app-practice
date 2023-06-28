import ListTodo from "../list_todo/ListTodo";
import Footer from "../footer/Footer";

function Wrapper() {
  return (
    <div>
      <div className="wrapper">
        <p className="header">THINGS TO DO</p>
        <input className="search-input" placeholder="Add new" autoFocus />
        <div className="alert hidden">There are no items.</div>
        <ListTodo />
        <Footer />
      </div>
      <p className="info">Press `Esc` to cancel.</p>
    </div>
  );
}

export default Wrapper;
