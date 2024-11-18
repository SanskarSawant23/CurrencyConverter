import { useEffect, useState } from "react"


function useCurrency(currency){
    const[data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())  //converts the data in the json format from the text/string format
            
        .then((res) => setData(res[currency]))

        console.log(data)
    },[currency])
    return data
}


export default useCurrency;

