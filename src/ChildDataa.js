import React, { useEffect, useState } from 'react'

import './main.css'
import './ParentTab'

function ChildDataa() {
  
 const [child, setChild] = useState([])
    const fetchBooks = async (url) => {
       
            const res = await fetch(url);
            console.log("chils data")
            console.log(res);
            const data = await res.json();
          
            console.log("our data is",data.movies);
          
         setChild(data.movies);
  
      
    };
    useEffect(() => {
      
       fetchBooks(`/neo4j/${global.values}`);
   }, []);
 
  return (

    
   <div>
        

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Director</th>
    
            </tr>
        </thead>
        <tbody>
         
            {
               child.map((addmovie) => {
                    
                    return (
                        <tr key={addmovie.id}>
                        
                            <td >{addmovie.id}</td>
                            <td>{addmovie.title}</td>
                            <td>{addmovie.director}</td>
                           
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
        </div>
    
  

 
  )
}

export default ChildDataa;