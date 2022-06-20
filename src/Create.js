export function Create(props) {
  return (
    <article>
      <h2>Create </h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(evt.target);
          const title = evt.target.title.value;
          const body = evt.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input name="title" type="text" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}
