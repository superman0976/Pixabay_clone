import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {

    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState('london');
   
    const api_key = "23036137-f8912712b83f105cc85d62580";
    
    useEffect(() => {
       
        const fetchData = async () =>{
              const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=200`);
              const data = await api.json();
              setImageData(data.hits);
              console.log(data);
        };

        fetchData();
    }, [query]);

    const fetchImageByCategory = async (cat) =>{
             const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=50`);
             const data = await api.json();
             setImageData(data.hits);
             console.log(data.hits);
    }

  return (
    <>
       <PixabayContext.Provider value={{imageData,  fetchImageByCategory,  setQuery}}>
        {props.children}</PixabayContext.Provider> 
    </>
  )
}

export default PixabayState
