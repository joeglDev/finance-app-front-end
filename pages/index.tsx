import {
  MainText,
  SecondaryTitle,
  Title,
} from "../components/StyledComponents";

const HomePage = () => {
  const paragraphContent = `An app to help you keep track of how your investments change over time. 
    For example, tracking how ISAs factors such as inflation and interest rates impact your  capitol.`;

  const techArr = ["next.js", "TypeScript", "React", "Styled Components"];

  return (
    <>
      <section>
        <Title>Personal Savings Tracker</Title>
        <MainText>{paragraphContent}</MainText>
        <SecondaryTitle>
          Some of the technologies I used to make this include:
        </SecondaryTitle>
        <ul>
          {techArr.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default HomePage;
