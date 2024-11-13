import { useState , useEffect} from "react";
import axios from 'axios';
import styles from '../styles/SearchBar.module.css';
import Result from "./Result";
import { useDebounce } from "../hooks/useDebounce";

const SearchBar=()=>{

    const [value,setValue]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    const [hideSuggestions,setHideSuggestions]=useState(true);
    const [result,setResult]=useState([]);


    const findResult = (title) =>{
        setResult(suggestions.find((suggestion)=>suggestion.title === title));
    }

    useDebounce(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://dummyjson.com/products/search?q=${value}&limit=10`);
                setSuggestions(data.products);
            } catch (e) {
                console.log(e);
            }
        };
       
        fetchData();
        
    }, 1000);
    return(
        <>
        <div className={styles.container}>
            <input 
                type="text"
                className={styles.textbox} 
                onFocus={()=>setHideSuggestions(false)}
                onBlur={()=>async () =>{ setTimeout(()=>{setHideSuggestions(true)},200)}}
                placeholder="Search for products"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <div className={`${styles.suggestions} ${hideSuggestions && styles.hidden}`}>
                {suggestions.map((suggestion) => (
                    <div className={styles.suggestion} 
                    key={suggestion.id}
                    onClick={()=>findResult(suggestion.title)}
                    >
                    {suggestion.title}
                    </div>
                ))}
            </div>
        </div>
        {result && <Result {...result}/>}
</>
    )
}
export default SearchBar;