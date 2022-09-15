import { useState, useRef } from 'react';

import './ChartHeader.css';

const ChartHeader = ({updateFilter}) => {
    const [filter, setFilter] = useState('month');

    const onChangeFilter = (e) => {
        const id = e.target.id;
        setFilter(id);
        updateFilter(id);
    }

    // refs

    const itemRefs = useRef([]);
    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('chart__active'));
        itemRefs.current[id].classList.add('chart__active');
    }

    return (
        <div className="chart__banner">
            <h2 className="chart__title">Revenue</h2>
            <div className="chart__filters">
                <div className="chart__item week"
                    ref={el => itemRefs.current[0] = el}
                    id={'week'} 
                    onClick={(e) => {onChangeFilter(e); focusOnItem(0)}}>Week</div>
                <div className="chart__item month chart__active"
                    ref={el => itemRefs.current[1] = el}
                    id={'month'} 
                    onClick={(e) => {onChangeFilter(e); focusOnItem(1)}}>Month</div>
                <div className="chart__item year"
                    ref={el => itemRefs.current[2] = el}
                    id={'year'} 
                    onClick={(e) => {onChangeFilter(e); focusOnItem(2)}}>Year</div>
            </div>
        </div>
    )
}

export default ChartHeader;