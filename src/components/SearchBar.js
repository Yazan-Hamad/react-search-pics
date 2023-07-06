import { useState } from "react";
import './SearchBar.css';
function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div className="search-bar">
            <label>Search for Images</label>
            <form onSubmit={handleSubmit}>
                <input value={term} type="text" onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;