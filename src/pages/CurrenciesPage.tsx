import React from 'react'
import axios from 'axios'

function CurrenciesPage() {

    const getData = () => { 
        axios.get('https://www.nbrb.by/api/exrates/currencies')
            .then(response => {
            const data = response.data;
            // convert the response to json
            const jsonData = JSON.parse(JSON.stringify(data));
            // do something with the json data
            console.log(jsonData);

  });
    }
               
  return (
    <div>
        
        
                
         
    </div>
  )
}

export default CurrenciesPage