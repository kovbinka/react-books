import { useState, useEffect } from 'react';
import SearchElements from './Search';
import TrendingBooks from './Books';

const SearchPanel = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const SEARCH_URL = `https://openlibrary.org/search.json?title`;
  const TRENDING_URL = `https://openlibrary.org/search.json?title=harry+potter`;

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setBooks(data.docs.slice(0,20));
      setError(null);
    } catch (err) {
      setError(err.message);
      setBooks([]);
      console.error(err);
    }
  };

  const handleSearch = (query, errMsg) => {
    if (errMsg) {
      setError(errMsg);
      setBooks([]);
      return;
    }
    const url = `${SEARCH_URL}=${encodeURIComponent(query)}`;
    fetchMovies(url);
  };

  const handleTrendingClick = () => {
    fetchMovies(TRENDING_URL);
  };

  useEffect(() => {
    fetchMovies(TRENDING_URL);
  }, []);

    return <>
      <SearchElements onSearch={handleSearch} />
      <TrendingBooks
        books={books}
        error={error}
        onTrendingClick={handleTrendingClick}
      />
    
    </>
}

export default SearchPanel;