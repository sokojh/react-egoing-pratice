import logo from "./logo.svg";
import "./App.css";
import { HeaderTag } from "./header";

function NavTag() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">JavaScript</a>
        </li>
      </ol>
    </nav>
  );
}
function ArticleTag() {
  return (
    <article>
      <h2>Welcome</h2>
      hello,web!
    </article>
  );
}
function App() {
  return (
    <div className="App">
      <HeaderTag></HeaderTag>
      <NavTag></NavTag>
      <ArticleTag></ArticleTag>
    </div>
  );
}

export default App;
