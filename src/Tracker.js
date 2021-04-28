import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import India from './image/india.png'
import Covid from './image/covid.png'
import Recover from './image/recover.png'
import Death from './image/death.png'




const Tracker = () => {

 
 const [data, setdata] =  useState([]);

 useEffect(()=>{

    async function covidapi(){

        const jsondata =await fetch('https://api.covid19api.com/summary');
     
        const jsdata = await jsondata.json();

        setdata(jsdata);
          
         // console.log(`the country name is : ${jsdata.Countries[76].Country} . New confirmed Cases here is : ${jsdata.Countries[76].NewConfirmed}. New Recovered Cases here is  : ${jsdata.Countries[76].NewRecovered}. New Death cases here is ${jsdata.Countries[76].NewDeaths}  `);
     }
     
     covidapi();
    
 },[])

 console.log(data.Countries[76]);

     

    return (
    
            <div className='all'>
            <div className='container'>
            <div className='heading'>
                <h1> COVID TRACKER</h1>
                </div>
            <div className='row'>
               <div className='col-3'>
               <div className='card'>
                <div className='card-img'>
                 <img src={India} height="30%" width="30%"/>   

                </div>
                <hr/>
                <div className='card-body'>   
                 <div class='bb'> 
                  <h4>  
                  Country Name :
                      <br/> 
                     {data.Countries[76].Country}
                  </h4>
                  </div>
                </div>   
            </div> 

                </div>    
                <div className='col-3'>
                <div className='card'>
                <div className='card-img'>
                 <img src={Covid} height="30%" width="30%"/>   

                </div>
                <hr/>
                <div className='card-body'>   
                <div class='bb'> 
                  <h4>  
                  New Confirmed :
                      <br/> 
                     {data.Countries[76].NewConfirmed}
                  </h4>
                  </div>
                </div>   
            </div> 
              </div>    
              <div className='col-3'>
              <div className='card'>
                <div className='card-img'>
                 <img src={Recover} height="38%" width="38%"/>   
                </div>
                <hr/>
                <div className='card-body'>   
                <div class='bb'> 
                  <h4>  
                  New Recovered :
                      <br/> 
                     {data.Countries[76].NewRecovered}
                  </h4>
                  </div>
                </div>   
            </div>

              </div>    
              <div className='col-3'>
              <div className='card'>
                <div className='card-img'>
                 <img src={Death} height="30%" width="30%"/>   

                </div>
                <hr/>
                <div className='card-body'>   
                <div class='bb'> 
                  <h4> 
                      New Deaths :
                      <br/> 
                     {data.Countries[76].NewDeaths}
                  </h4>
                  </div>
                </div>   
            </div>
              </div>    
            </div>
             </div> 
             </div>
        )
}

export default Tracker

