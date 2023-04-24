function HomePage() {
  const paragraphContent = `A app to help you keep track of how your investments change over time. 
    For example, tracking how ISAs factors such as inflation and interest rates impact your  capitol.`;

  const techArr = ["next.js", "TypeScript", "React", "Styled Components"];

  return (
    <>
      <section>
        <h1>Finance app</h1>
        <p>{paragraphContent}</p>
        <h2>Some of the technologies I used to make this include:</h2>
        <ul>
          {techArr.map((tech) => {
           return <li>{tech}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default HomePage;
