import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <Container fluid>
        {books.length ? (
          <List>
            {books.map(book => (
              <>
                <Book book={book} deleteBook={deleteBook} key={book._id} saved={true} />
              </>
            ))}
          </List>
        ) : (
          <div className="d-flex justify-content-center text-primary mt-5">You'll need to search for a book and click the save button before anything will show up here.</div>
        )}
      </Container>
    );
  }

export default Saved;
