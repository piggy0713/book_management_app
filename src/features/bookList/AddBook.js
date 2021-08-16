import React from "react";
import BookForm from "./BookForm";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookAdded } from "./bookListSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (
    bookName,
    bookCategory,
    bookDescription,
    bookPrice
  ) => {
    dispatch(
      bookAdded({
        id: nanoid(),
        bookName,
        bookCategory,
        bookDescription,
        bookPrice,
      })
    );

    history.push("/");
  };

  return (
    <>
      <BookForm submitHandler={submitHandler} />
    </>
  );
};

export default AddBook;
