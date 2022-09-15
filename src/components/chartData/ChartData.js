import './ChartData.css';

const ChartData = (statistic) => {
   console.log(statistic); 
    
    return (
        <div className="chart__data">
            <div className="data__total">
                <h3 className="data__tilte">Total</h3>
                <div className="revenue">{statistic.statistic.total}</div>
            </div>
            <div className="data__average">
                <div className="average__item data__min">
                    <h3 className="data__tilte">Min</h3>
                    <div className="price__item min">{statistic.statistic.min}</div>
                </div>
                <div className="average__item data__medium">
                    <h3 className="data__tilte">Medium</h3>
                    <div className="price__item medium">{statistic.statistic.medium}</div>
                </div>
                <div className="average__item data__max">
                    <h3 className="data__tilte">Max</h3>
                    <div className="price__item max">{statistic.statistic.max}</div>
                </div>
            </div>
        </div>
    )
}

export default ChartData;