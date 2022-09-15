import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useOrilServiceApi from '../services/OrilServiceApi';

import ChartHeader from '../components/chartHeader/ChartHeader';
import ChartRevenue from '../components/chartRevenue/ChartRevenue';
import ChartData from '../components/chartData/ChartData';

import './ChartPage.css';

const ChartPage = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('month');
    const [statistic, setStatistic] = useState('month');

    const {chartId} = useParams();

    const {getChartData} = useOrilServiceApi();

    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getChartData(chartId)
            .then(res => setData(res))
    }

    const updateFilter = (filter) => {
        setFilter(filter)
    }

    const updateStat = (stat) => {
        setStatistic(stat)
    }

    return (
        <section className="chartPage">
            <div className="container container-large">
                <ChartHeader updateFilter={updateFilter} />
                <ChartRevenue data={data} filterProp={filter} updateStat={updateStat}/>
                <ChartData statistic={statistic}/>
            </div>
        </section>
    )
}

export default ChartPage;