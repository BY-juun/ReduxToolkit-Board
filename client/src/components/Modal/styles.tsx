import styled from "styled-components";

export const ModalRoot = styled.div`
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 25px;
  textarea {
    padding: 13px 20px;
    background: #f5f5f5;
    width: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 4px;
    min-height: 250px;
    box-sizing: border-box;
  }
`;

export const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 30%;
  z-index: 2;
  padding: 30px 20px;
  background-color: white;
  text-align: center;
  color: black;
  border-radius: 6px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2);
`;

export const CommentFormTitle = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  background: #0099fa;
  color: #fff;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
`;
