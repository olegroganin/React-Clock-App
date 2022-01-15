import React from 'react';
import {useEffect, useState} from 'react';


function Greeting() {

const [greetingState, setGreetingState] = useState();

useEffect(() => {
   function greetingText () {
		const date = new Date();
		const hour = date.getHours();
		if(hour<5) {
		setGreetingState('Good night!')
		} if (hour>=5 && hour<11) {
	   setGreetingState('Good morning!')
		} if (hour>=11 && hour<17) {
		setGreetingState('Have a nice day!')
		} if (hour>=17 && hour<=23) {
		setGreetingState('Good evening!')
		} 
		};

   greetingText();

});

return (
<div>
	<div className='greeting'>{greetingState}</div>
</div>
)
};


export default Greeting;