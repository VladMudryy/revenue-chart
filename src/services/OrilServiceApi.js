const useOrilServiceApi = () => {
    const _apiBase = 'https://oril-coins-test.herokuapp.com/';
    
    const getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    // Get list

    const getList = async () => {
        const res = await getResource(`${_apiBase}list`);
        return res.map(_transformDataList);
    }

    // Get data for chart by id

    const getChartData = async (id) => {
        const res = await getResource(`${_apiBase}item/${id}`);
        return _getDataItem(res);
    }

    const _transformDataList = (item) => {
        const currentDate = new Date(item.date);
        let month = currentDate.getMonth() + 1;
        if (month < 10) month = "0" + month;
        let dateOfMonth = currentDate.getDate();
        if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
        let year = currentDate.getFullYear();
        let formattedDate = dateOfMonth + "." + month + "." + year;

        return {
            isActive: item.isActive,
            id: item.id,
            _id: item._id,
            name: item.name,
            date: formattedDate,
            _date: item.date
        }
    }

    const _getDataItem = (obj) => {
        const sortedArr = obj.data.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
          const currentDate = new Date(sortedArr[0].date);
          let month = currentDate.getMonth();
            if (month < 10) month = "0" + month;
            let dateOfMonth = currentDate.getDate();
            if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
            let year = currentDate.getFullYear();
            let formattedDate = dateOfMonth + "." + month + "." + year;
        return {
            revenue: sortedArr,
            lastData: formattedDate,
            id: obj.id,
            _id: obj._id
        }
    }

    return {getList, getChartData}
}

export default useOrilServiceApi;