import React, { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [bookName, setBookName] = useState(props.bookName ?? "");
  const [bookPrice, setBookPrice] = useState(props.bookPrice ?? "");
  const [bookCategory, setBookCategory] = useState(props.bookCategory ?? "");
  const [bookDescription, setBookDescription] = useState(
    props.bookDescription ?? ""
  );

  const submitHandler = (e) => {
    e.preventDefault();
    let errorMsg = "";
    const values = [bookName, bookCategory, bookDescription, bookPrice];
    const isPriceValid = bookPrice.match(/^\d{1,}(\.\d{0,2})?$/) ? true : false;
    const isALlFieldFilled = values.every((field) => {
      const value = field.trim();
      return value !== "" && value !== "0";
    });
    if (!isALlFieldFilled) {
      errorMsg = "Please fill in all entry fields.";
    } else if (!isPriceValid) {
      errorMsg = "Please enter a valid price.";
    } else {
      props.submitHandler(bookName, bookCategory, bookDescription, bookPrice);
    }
    setErrorMsg(errorMsg);
  };

  return (
    <div className="formContainer">
      {errorMsg && <h3 className="errorInfo">{errorMsg}</h3>}
      <form onSubmit={submitHandler} className="bookForm">
        <label>Book Form</label>
        <input
          name="name"
          type="text"
          value={bookName}
          placeholder="Enter book name"
          onChange={(e) => setBookName(e.target.value)}
        ></input>
        <select
          name="category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
        >
          <option value="">--Choose a category--</option>
          <option value="comic">Comic</option>
          <option value="mystery">Mystery</option>
          <option value="autobiography">Autobiography</option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="art">Art</option>
        </select>
        <input
          name="description"
          type="text"
          value={bookDescription}
          placeholder="Enter book description"
          onChange={(e) => setBookDescription(e.target.value)}
        ></input>
        <input
          name="price"
          type="text"
          value={bookPrice}
          placeholder="Enter book price"
          onChange={(e) => setBookPrice(e.target.value)}
        ></input>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
