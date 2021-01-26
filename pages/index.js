import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import GitHub from '../src/components/GitHub'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  color:black;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;




export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>

          <Widget>
            <Widget.Header><h1>{db.title}</h1></Widget.Header>
            <Widget.Content><p>{db.description}</p></Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>Teste</p>
            </Widget.Content>
          </Widget>

          
      <GitHub></GitHub>
      </QuizContainer>

    </QuizBackground>
  );
}
