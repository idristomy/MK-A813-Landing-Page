import { useEffect, useState } from "react"


const useFetch = (url) =>{
    const [data, setData] = useState(null);

    useEffect(() =>{
        fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error('Coud not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data =>{
                setData(data)
            })
            .catch(err =>{
                setError(err.message)
            })
    }, [url]);    
    
    
    return {data, error};
};

export default useFetch