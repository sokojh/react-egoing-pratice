function HeaderTag(props) {
  console.log("props:", props.title, props);
  const mystyle = {
    borderBottom: "1px solid gray",
    padding: "10px",
    color: "red",
  };
  return (
    <header className={props.className}>
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
