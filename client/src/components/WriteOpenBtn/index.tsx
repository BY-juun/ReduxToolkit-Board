import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../rootReducer";
import { handleModal, UtilStateType } from "../../slice/util";
import Modal from "../Modal";
import { OpenBtn } from "./styles";

const WriteOpenBtn = () => {
  const dispatch = useDispatch();
  const { openModal } = useSelector<ReducerType, UtilStateType>((state) => state.utilSlice);

  const onClickOpen = useCallback(() => {
    dispatch(handleModal(true));
  }, []);
  const onClose = useCallback(() => {
    dispatch(handleModal(false));
  }, []);
  return (
    <>
      <OpenBtn onClick={onClickOpen}>WriteOpenBtn</OpenBtn>
      {openModal && <Modal onClose={onClose} />}
    </>
  );
};

export default WriteOpenBtn;
