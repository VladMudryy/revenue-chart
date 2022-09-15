import  {useState, useEffect} from 'react';

import './ChartRevenue.css';

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    CartesianGrid,
  } from "recharts";
  import moment from 'moment';
  moment().format();

  function Home({dataRevenues, filterCurr}) {
    const [data, setData] = useState('');
    const [filterTickle, setfilterTickle] = useState('');
    const [filterLabel, setfilterLabel] = useState('');
    
    useEffect(() => {
      switch (filterCurr) {
        case "week":
          setfilterTickle(1)
          setfilterLabel(() => (date) => new Date(date).toLocaleString('en-us', {weekday:'short'}))
          break;
        case "year":
          setfilterTickle(31)
          setfilterLabel(() => (date) => `${new Date(date).toLocaleString('en-us', {month:'short'})} ${new Date(date).toLocaleString('en-us', {year:'2-digit'})}`)
          break;
        default:
          setfilterTickle(4)
          setfilterLabel(() => (date) => `${new Date(date).toLocaleString('en-us', {day:'numeric'})} ${new Date(date).toLocaleString('en-us', {month:'short'})}`)
      }
    }, [filterCurr])

    let currentMonthMax = 1000
    if (data) {
      currentMonthMax = Math.max(...data.map((o) => o.value));
    }

    

    useEffect(() => {
      if (dataRevenues) {
        setData(dataRevenues)
      }
    }, [dataRevenues])

    return (
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="33%" stopColor="#007AFF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
  
          <Area type="monotone" dataKey="value" stroke="#007AFF" fill="url(#color)"/>
  
          <XAxis
              style={{
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.4px',
                color: '#9C9C9C'

            }}
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={filterTickle}
            tickFormatter={filterLabel}
          />
  
          <YAxis
              style={{
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px'
            }}
            dataKey="curency"
            axisLine={false}
            tickLine={false}
            tickCount={7}
            type="number"
            domain={[0, currentMonthMax || 1000]}
            tickFormatter={(number) => `$${Math.ceil(number/50)*50}`}
          /> 
          <CartesianGrid opacity={0.4} horizontal={false}/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }

const ChartRevenue = ({data, filterProp, updateStat}) => {
    const [dataRevenues, setDataRevenues] = useState('');
    const [filter, setFilter] = useState(filterProp);
    const [transformedDate, setTransformedDate] = useState('');
    const [statistic, setStatistic] = useState('');

    useEffect(() => {
      setDataRevenues(data.revenue);
    }, [data])

    useEffect(() => {
      setFilter(filterProp)
    }, [filterProp])

    useEffect(() => {
      if (dataRevenues) {
        setTransformedDate(transformRevenue(dataRevenues, filter))
      }
    }, [data, filter])

    useEffect(() => {
      if (transformedDate) {
        setStatistic(calcStaticstics())
      }
    }, [transformedDate])

    useEffect(() => {
      updateStat(statistic);
    }, [statistic])

    const transformRevenue = (data, filter) => {
        const dateNew = [...data]
        const endDate = Date.parse(dataRevenues[999].date);
        const startDateW = Date.parse(dataRevenues[999].date) - ((24*60*60*1000) * 7);
        const startDateM = Date.parse(dataRevenues[999].date) - ((24*60*60*1000) * 30);
        const startDateY = Date.parse(dataRevenues[999].date) - ((24*60*60*1000) * 365);

        switch (filter) {
            case 'month':
              return dateNew.filter(item => {
                let day = Date.parse(item.date)
                return day >= startDateM && day <= endDate && item.curency !== 'null'
              }).map(item => {
                return {'date': item.date, 'value': +item.curency}
              })
            case 'year':
              return dateNew.filter(item => {
                let day = Date.parse(item.date)
                return day >= startDateY && day <= endDate && item.curency !== 'null'
              }).map(item => {
                return {'date': item.date, 'value': +item.curency}
              })
            default:
              return dateNew.filter(item => {
                let day = Date.parse(item.date)
                return day >= startDateW && day <= endDate && item.curency !== 'null'
              }).map(item => {
                return {'date': item.date, 'value': +item.curency}
              })
      }
    }

    // max, min, total ...
    
    
    const calcStaticstics = () => {
        let total = 0
        transformedDate.forEach(item => {
          total += item.value
        })
        const min = Math.min(...transformedDate.map(item => item.value));
        const max = Math.max(...transformedDate.map(item => item.value));
        const medium = total/transformedDate.length;

        return {
          total: `$ ${Math.ceil(total).toLocaleString("fr")}`, 
          min: `$ ${Math.ceil(min).toLocaleString("fr")}`, 
          max: `$ ${Math.ceil(max).toLocaleString("fr")}`, 
          medium: `$ ${Math.ceil(medium).toLocaleString("fr")}`
        }
    }

    return (
        <div className="chart">
            <div></div>
            <Home dataRevenues={transformedDate} filterCurr={filter} />
        </div> 
    )
}

export default ChartRevenue;