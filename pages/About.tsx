import { NavBar } from "../components/navbar/NavBar";
import {
  MainText,
  SecondaryTitle,
  Title,
  ListAsGridContainer,
  Card,
} from "../components/StyledComponents";

const About = () => {
  const paragraphContent = `An app to help you keep track of how your investments change over time. 
    For example, tracking how ISAs factors such as inflation and interest rates impact your  capitol.`;

  const techArr = ["next.js", "TypeScript", "React", "Styled Components"];

  return (
    <>
      <NavBar></NavBar>
      <Title>Personal Savings Tracker</Title>
      <MainText>{paragraphContent}</MainText>
      <SecondaryTitle>
        Some of the technologies I used to make this include:
      </SecondaryTitle>
      <section>
        <ListAsGridContainer>
          {techArr.map((tech) => {
            return <Card key={tech}>{tech}</Card>;
          })}
        </ListAsGridContainer>
      </section>
    </>
  );
};

export default About;
