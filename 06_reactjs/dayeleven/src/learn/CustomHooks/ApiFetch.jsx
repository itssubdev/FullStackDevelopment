import {useState, useEffect} from "react";
import axios from "axios";

function ApiFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const FnData = async() =>{
            try{
                let originaldata = await axios.get(url);
                setData(originaldata.data);
                setLoading(false);
            }catch(e){
                console.log(e.message);
                setError(e.message);
                setLoading(false);
            }
        }
        FnData();
    }, [])
  return {data, loading, error};
}

export default ApiFetch;
