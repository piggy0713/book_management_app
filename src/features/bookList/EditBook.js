import React from "react";
import BookForm from "./BookForm";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { bookEdited } from "./bookListSlice";

export const EditBook = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const book = useSelector((state) => {
    return state.bookList.find((book) => {
      return book.id === props.match.params.id;
    });
  });

  if (!book) {
    return <h1> No book found!</h1>;
  }

  const submitHandler = (
    bookName,
    bookCategory,
    bookDescription,
    bookPrice
  ) => {
    dispatch(
      bookEdited({
        id: book.id,
        bookName,
        bookCategory,
        bookDescription,
        bookPrice,
      })
    );
    history.push("/");
  };

  return (
    <div>
      <BookForm
        bookName={book.bookName}
        bookCategory={book.bookCategory}
        bookDescription={book.bookDescription}
        bookPrice={book.bookPrice}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default EditBook;
