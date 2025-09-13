import { useEffect, useState } from "react";

function BookDetails({ isbn }) {
  const [book, setBook] = useState(null);
  
  useEffect(() => {
    async function fetchBook() {
        const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
        const data = await res.json();
        setBook(data);
    }
    fetchBook();
  }, [isbn]);

  if (!book) return null;

  return (
    <div className="bookDetails">
      <div className="imageContainer">
        <img src={book.image} alt={book.title} />
      </div>
      <h2 className="title">{book.title}</h2>
      <p className="author">by {book.authors}</p>
      <button
        className="viewDetailsButton"
        onClick={() => window.open(book.url, "_blank")}> View Details
      </button>
    </div>
  );
}
    
export default BookDetails; 