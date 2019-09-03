import React, { Component } from "react";

class BookList extends Component {
  render() {
    let bookItems = this.props.books.map(book => {
      return (
        <div className="singleBook">
          <a href={book.link}>
            <div className="bookTitle"> {book.title} </div>
            <img
              src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}
            />
            <div className="bookInfo">
              <div>{book.author}</div>
              <div>{book.year}</div>
            </div>
          </a>
        </div>
      );
    });

    return <div>{bookItems}</div>;
  }
}

export default BookList;
