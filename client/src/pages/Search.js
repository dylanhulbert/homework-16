import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Container from 'react-bootstrap/Container'
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  const [formObject, setFormObject] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      API.searchBook(formObject.search)
      .then(res => {
        setSearchResults(res.data.items)
      })
      .catch(err => console.log(err));
    }
};

return (
  <>
<Container>
  <div className="col-sm">
    <Form>
    <Form.Group className="mx-auto" style={{width: 600}}>
      <InputGroup className="mt-5">
        <Form.Control size="lg" type="text" Input onChange={handleInputChange} name="search" placeholder="What are you looking for?" />
      </InputGroup>
      <InputGroup className="mt-3 justify-content-end">
        <button type="button" class="btn btn-primary"  onClick={handleFormSubmit}>Go!</button>
			</InputGroup>
    </Form.Group>
    </Form>
  </div>
</Container>

<SearchResults searchResults={searchResults} />
  </>
  );
}

export default Search;
