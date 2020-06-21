import axios from "axios";

export default {

  getBooks: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  searchBook: function(searchTerm) {
    const searchURL = "https://www.googleapis.com/books/v1/volumes?q=";
    return axios.get(searchURL + searchTerm);
  }
};
