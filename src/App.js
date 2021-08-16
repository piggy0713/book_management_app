import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BookList } from "./features/bookList/BookList";
import AddBook from "./features/bookList/AddBook";
import { EditBook } from "./features/bookList/EditBook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={BookList} path="/" exact={true} />
          <Route component={AddBook} path="/add" exact={true} />
          <Route component={EditBook} path="/edit/:id" exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
