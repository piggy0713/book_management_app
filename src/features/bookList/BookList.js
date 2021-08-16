import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SearchBook from "./SearchBook";
import "./BookList.css";
import { bookRemoved } from "./bookListSlice";

export const BookList = () => {
  const books = useSelector((state) => state.bookList);
  const [filterByTerm, setFilterByTerm] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => () => {
    dispatch(
      bookRemoved({
        id,
      })
    );
  };

  const handleChangeBySearch = (e) => {
    setFilterByTerm(e.target.value);
  };
  const searchParams = ["bookName", "bookCategory", "bookDescription"];
  const searchTermName = filterByTerm.toLowerCase();

  const filterByTermSearch = (book) =>
    searchParams.some((param) =>
      book[param].toLowerCase().includes(searchTermName)
    );

  return (
    <div>
      <h1>Book Management App</h1>
      <button className="btn-add">
        <Link className="link" to={"/add"}>
          Add Book
        </Link>
      </button>

      <SearchBook onChange={handleChangeBySearch} value={filterByTerm} />
      <div className="bookList">
        {books.filter(filterByTermSearch).map((book) => (
          <div className="bookContainer" key={book.id}>
            <h2 className="bookTitle">{book.bookName}</h2>
            <p>{`Book Category: ${book.bookCategory}`}</p>
            <p>{`Book Description: ${book.bookDescription}`}</p>
            <p>{`Book price: $${book.bookPrice}`}</p>
            <button
              onClick={() => history.push(`/edit/${book.id}`)}
              className="btn-edit"
            >
              Edit
            </button>
            <button onClick={handleRemoveBook(book.id)} className="btn-del">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
