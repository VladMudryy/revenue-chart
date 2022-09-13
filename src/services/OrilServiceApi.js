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
        return res.map(_transformList);
    }
    

    const _transformList = (item) => {
        return {
            id: item.id,
            isActive: item.isActive,
            _id: item._id
        }
    }

    return {getList}
}

export default useOrilServiceApi;