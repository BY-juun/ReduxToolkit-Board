import React from "react";
import Header from "./components/Header";
import WriteOpenBtn from "./components/WriteOpenBtn";
import { Wrapper } from "./styles";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <WriteOpenBtn />
      </Wrapper>
    </>
  );
}

export default App;
