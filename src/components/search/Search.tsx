import { ChangeEvent } from 'react';
import { useState } from 'react';
import './Search.css';

interface SearchProps {
  onSearch: (val: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const [value, setValue] = useState<string>("")


  const onType = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue)
    onSearch(inputValue);
  }

  const onEnter = (suggestion?: string) => {
    onSearch(suggestion || value);
  }


  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchBar"
        placeholder="Ej: Verioska"
        maxLength={100}
        className="inpur-search"
        onChange={onType}
        onKeyDown={(e) => e.key === 'Enter' && onEnter() }
        value={value}
        autoComplete="off"
      />
      <i className="fa-solid fa-magnifying-glass icn-search"></i>
    </div>
  );
};

export default Search;