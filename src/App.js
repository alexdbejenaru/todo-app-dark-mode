import './styles/index.scss';
import "react-toggle/style.css"
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <main className="app">
      <div className="bg-img"></div>
      <div className="container">
        <Header />
        <TodoList />

      </div>
    </main>
    </>
  );
}

export default App;
