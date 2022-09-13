import './ChartData.css';

const ChartData = () => {
    return (
        <div className="chart__data">
            <div className="data__total">
                <h3 className="data__tilte">Total</h3>
                <div className="revenue">$ 27 540</div>
            </div>
            <div className="data__average">
                <div className="average__item data__min">
                    <h3 className="data__tilte">Min</h3>
                    <div className="price__item min">$ 440</div>
                </div>
                <div className="average__item data__medium">
                    <h3 className="data__tilte">Medium</h3>
                    <div className="price__item medium">$ 11440</div>
                </div>
                <div className="average__item data__max">
                    <h3 className="data__tilte">Max</h3>
                    <div className="price__item max">$ 440</div>
                </div>
            </div>
        </div>
    )
}

export default ChartData;