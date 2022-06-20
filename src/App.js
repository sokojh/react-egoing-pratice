import logo from "./logo.svg";
import "./App.css";
import { HeaderTag } from "./header";
import BasicButtons from "./muistyle";
import { useState } from "react";
import { Create } from "./Create";

function NavTag(props) {
  const list = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a
          href={"/read/" + e.id}
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect(e.id);
          }}
        >
          {e.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}
function ArticleTag(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}!
    </article>
  );
}

function App() {
  let [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState("null");
  const [nextId, setNextId] = useState(6);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "Javascript is..." },
    { id: 4, title: "list", body: "list is..." },
    { id: 5, title: "abb", body: "abb is..." },
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <ArticleTag title="Welcome" body="Hello, WEB!"></ArticleTag>;
  } else if (mode === "READ") {
    const topic = topics.filter((e) => {
      if (e.id === id) {
        return true;
      } else {
        return false;
      }
    })[0];
    content = <ArticleTag title={topic.title} body={topic.body}></ArticleTag>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title, body };
          let newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  }

  return (
    <div className="App">
      <HeaderTag
        onSelect={(id) => {
          setMode("CREATE");
          setId(id);
        }}
        title="Welcome"
        body="Hello, Web"
      ></HeaderTag>
      <NavTag
        onSelect={(id) => {
          alert("Nav!! id값: " + id);
          setMode("READ");
          setId(id);
        }}
        data={topics}
      ></NavTag>
      {content}
      <BasicButtons></BasicButtons>
    </div>
  );
}

export default App;
