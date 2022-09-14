import { useState } from 'react';

import './SearchPanel.css';
import search from '../../img/search.svg';

const SearchPanel = ({onUpdateSearch}) => {
    const [term, setTerm] = useState('');

    const onUpdate = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term)
    }

    return (
        <div className="search">
            <input value={term} 
                type="text" 
                className="search__input" 
                placeholder="Search"
                onChange={onUpdate}/>
            <img className="search__icon" src={search} alt="search-icon"/>
        </div>
    )

}

export default SearchPanel