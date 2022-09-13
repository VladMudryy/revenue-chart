import ChartHeader from '../components/chartHeader/ChartHeader';
import ChartRevenue from '../components/chartRevenue/ChartRevenue';
import ChartData from '../components/chartData/ChartData';

import './ChartPage.css';

const ChartPage = () => {
    return (
        <section className="chartPage">
            <div className="container container-large">
                <ChartHeader />
                <ChartRevenue />
                <ChartData />
            </div>
        </section>
    )
}

export default ChartPage;