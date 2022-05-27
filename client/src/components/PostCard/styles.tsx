import styled from "styled-components";

export const PostCardWrapper = styled.div`
  width: 25%;
  padding: 10px 15px;
  border: 1px solid #0099fa;
  margin: 10px 0;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 5px;
      span {
        font-size: 25px;
        font-weight: 600;
      }
      button {
        cursor: pointer;
        background: #fc96a5;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
        margin-right: 15px;
      }
    }
  }
`;
