import logo from "./logo.svg";
import "./App.css";
import { HeaderTag } from "./header";

function NavTag(props) {
  console.log(props.data);
  const list = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a href={"/read/" + e.id}>{e.title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{list}</ol>
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
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
  ];
  return (
    <div className="App">
      <HeaderTag title="Welcome" body="Hello, Web"></HeaderTag>
      <NavTag data={topics}></NavTag>
      <ArticleTag></ArticleTag>
    </div>
  );
}

export default App;
