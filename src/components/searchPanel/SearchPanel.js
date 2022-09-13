import './SearchPanel.css';
import search from '../../img/search.svg';

const SearchPanel = () => {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Search"/>
            <img className="search__icon" src={search} alt="search-icon"/>
        </div>
    )

}

export default SearchPanel