import React from "react";
import DeleteBtn from "../DeleteBtn";
import { FormBtn } from "../Form";
import { ListItem } from "../List";
import API from "../../utils/API";

function Book(props, { children }) {
  const { authors, canonicalVolumeLink, description, imageLinks, publisher, publishedDate, title } = props.book;

  const saveFavorite = () => {
    API.saveBook({
      author: authors,
      canonicalVolumeLink,
      description,
      imageLinks,
      publisher,
      publishedDate,
      title
    })
      .then(console.log('saved a favorite'))
      .catch(err => console.log(err));
  }

  const styles ={
    fontFamily: 'Arial',
  }

return (
  <ListItem>
    <div style={styles}>
      <img className="float-left mr-2 ml-2 mt-2" src={(imageLinks && imageLinks.thumbnail)} />
        <p><a href={canonicalVolumeLink} style={styles}><h5>{title}</h5></a></p>
        <p className="float-right">{props.saved||<p><FormBtn onClick={saveFavorite} className="mr-1 ml-1 mt-1" >Add to Saved</FormBtn></p>}</p>
        <p className="float-right">{props.saved && <p><DeleteBtn onClick={() => props.deleteBook(props.book._id)} className=" mr-1 ml-1 mt-1" /></p>}</p>
        <p style={styles}>{(authors && authors.length > 1)} {(authors && authors.map(author => {return (author)}))}</p>
        <p style={styles}>{description}</p>
        <p style={styles}>{publishedDate}</p>
    </div>
      
    {children}

  </ListItem>

  );
}
  
export default Book;