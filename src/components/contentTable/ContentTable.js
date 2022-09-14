import { useState, useEffect, useRef } from 'react';

import SearchPanel from '../searchPanel/SearchPanel';

import useOrilServiceApi from '../../services/OrilServiceApi';

import './ContentTable.css';
import arrow from '../../img/arrow.svg';

const ContentTable = () => {
    const [listOfPeople, setListOfPeople] = useState([]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');

    const {getList} = useOrilServiceApi();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getList()
            .then(res => setListOfPeople(res))
    }

    // serach filter

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    // filter 

    const onUpdateFilter = (e) => {
        const id = e.target.id;
        setFilter(id);
    }

    const filterItems = (items, filter) => {
        const itemsN = [...items]
        switch (filter) {
            case 'date':
                return itemsN.sort(function(a,b){
                    return new Date(b._date) - new Date(a._date);
                  });
            case 'state':
                return itemsN.sort(function(a,b){
                    return new Date(b.isActive) - new Date(a.isActive);
                  });
            default:
                return items
        }
    }

    // ref 

    const itemRefs = useRef([]);
    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('add'));
        itemRefs.current[id].classList.add('add');
    }

    // render

    function renderItems(people) {
        const items = people.map((item) => {

            return (
                <li key={item._id} className="content__items">
                    <div className="content__item content_name">{item.name}</div>
                    <div className="content__item content_date">{item.date}</div>
                    <div 
                        className="content__item content_active"
                        style={item.isActive ? {'color' : '#5D5FEF'} : {'color' : '#EF5DA8'}}>{item.isActive ? 'Active' : 'Disable'}</div>
                </li>
            )
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }
    
    const items = renderItems(filterItems(searchItem(listOfPeople, term), filter));

    return (
        <>
            <SearchPanel onUpdateSearch={onUpdateSearch} />
            <div className="mainTable">
                <div className="filters">
                    <div className="filters__item">
                        <div className="filter__item-name" 
                            id={'name'} 
                            onClick={(e) => {onUpdateFilter(e); focusOnItem(0)}}>Name</div>
                        <img ref={el => itemRefs.current[0] = el} src={arrow} alt="arrow-icon" 
                        className="filter__item-img add"/>
                    </div>
                    <div className="filters__item filters__item_long">
                        <div className="filter__item-name" 
                            id={'date'} 
                            onClick={(e) => {onUpdateFilter(e); focusOnItem(1)}}>Date</div>
                        <img src={arrow} 
                            alt="arrow-icon" 
                            className="filter__item-img"
                            ref={el => itemRefs.current[1] = el}/>
                    </div>
                    <div className="filters__item filters__item_short">
                        <div className="filter__item-name" 
                            id={'state'} 
                            onClick={(e) => {onUpdateFilter(e); focusOnItem(2)}}>State</div>
                        <img src={arrow} 
                            alt="arrow-icon" 
                            className="filter__item-img"
                            ref={el => itemRefs.current[2] = el}/>
                    </div>
                </div>
                <div className="content">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContentTable;