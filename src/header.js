function HeaderTag(props) {
  console.log("props:", props.title, props);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(evt) => {
            evt.preventDefault();
            props.onSelect(evt.id);
          }}
        >
          {props.title}WWWdhdh?WW
        </a>
      </h1>
      <p>{props.body}</p>
    </header>
  );
}

export { HeaderTag };
