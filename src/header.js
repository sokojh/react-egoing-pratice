function HeaderTag(props) {
  console.log("props:", props.title, props);
  return (
    <header>
      <h1>
        <a href="/">{props.title}WWWdhdh?WW</a>
      </h1>
    </header>
  );
}

export { HeaderTag };
