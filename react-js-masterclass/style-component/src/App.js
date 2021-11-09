import styled from "styled-components";
const Father = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Father>
      <Title>Hello</Title>
    </Father>
  );
}

export default App;
