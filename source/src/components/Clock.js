import React from 'react';
import {useEffect, useState} from 'react';
import Greeting from '../components/Greeting';


function Clock() {
   const [clockState, setClockState] = useState();

   useEffect(() => {
      setInterval(() => {
         const date = new Date();
         setClockState(date.toLocaleTimeString());
      }, 1000)
   });

   return (
      <div className='wrapper'>
         <div className='container'>
            <Greeting/>
            <div className='clock'>{clockState} </div>
         </div>
      </div>
   )
};


export default Clock;