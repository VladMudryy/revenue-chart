import './ContentTable.css';
import arrow from '../../img/arrow.svg'

const ContentTable = () => {
    return (
        <div className="mainTable">
            <div className="filters">
                <div className="filters__item">
                    <div className="filter__item-name">Name</div>
                    <img src={arrow} alt="arrow-icon" className="filter__item-img"/>
                </div>
                <div className="filters__item filters__item_long">
                    <div className="filter__item-name">Date</div>
                    <img src={arrow} alt="arrow-icon" className="filter__item-img"/>
                </div>
                <div className="filters__item filters__item_short">
                    <div className="filter__item-name">State</div>
                    <img src={arrow} alt="arrow-icon" className="filter__item-img"/>
                </div>
            </div>
            <div className="content">
                <ul>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                    <li className="content__items">
                        <div className="content__item content_name">Jane Cooper</div>
                        <div className="content__item content_date">01.10.2021</div>
                        <div className="content__item content_active">Active</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContentTable;