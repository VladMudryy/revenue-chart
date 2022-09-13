import './ChartHeader.css';

const ChartHeader = () => {
    return (
        <div className="chart__banner">
            <h2 className="chart__title">Revenue</h2>
            <div className="chart__filters">
                <div className="chart__item week chart__active">Week</div>
                <div className="chart__item month">Month</div>
                <div className="chart__item year">Year</div>
            </div>
        </div>
    )
}

export default ChartHeader;