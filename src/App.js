import React, { useEffect, useState } from 'react'
import News from './Components/News';

function App() {
  const [articles , setArticles]=useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-12&sortBy=publishedAt&apiKey=061db73a650d4c92a03a8db9c32816b9")
        .then(req=>req.json())
        .then(data=>setArticles(data.articles))
    }, [])
  return (
    <div className="clas" style={{padding:"10px", margin:"10px"}}>
      {
          articles.map(x=> <News news={x}/>)
      }
    </div>
  );
}

export default App;
