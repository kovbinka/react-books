import React from 'react';
import IconCheckboxes from './Checkboxes';
import './Books.css'

const TrendingBooks = ({ books, error, onTrendingClick }) => {
  return (
    <div className="container">
      <button className='search-btn' onClick={onTrendingClick}>Load "Harry Potter" Books</button>
      {error && <p className="error">{error}</p>}
      <div className="book-grid">
        {books.map((book) => {
          const title = book.title || book.name;
          const releaseDate = book.first_publish_year || 'N/A';
          const authorName = book.author_name?.length ? book.author_name.map((author, idx) => <div key={idx}>{author}</div>) : 'Unknown Author';
          const authorKey = book.author_key?.length ? book.author_key.map((author, idx) => <div key={idx}>{author}</div>) : 'Unknown Key';

          const posterPath = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://cdn.displate.com/artwork/857x1200/2024-06-30/3cd0b191fd7ee40875dfe7018672562d_f974f232bb0a67266a3fb0fbb8d3147e.jpg';

          return (
            <div key={book.id} className="book-card">
              <img src={posterPath} alt={title} />
              <div className="book-info">
                <h2>{title}</h2>
                <p>
                  <strong>⭐Author:</strong> {authorName}
                </p>
                <p>
                  <strong>🗓️Release Date:</strong> {releaseDate}
                </p>
                <p>
                  <strong>❔Author Key:</strong> {authorKey}
                </p>
              </div>
              <IconCheckboxes/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingBooks;
