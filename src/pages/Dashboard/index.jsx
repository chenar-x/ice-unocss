import React, { useState, useReducer } from 'react';
 
import Guide from './components/Guide';

import Button from '../../components/Button'

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
}


const Dashboard = () => {
	// const [curTheme, setCurTheme] = useReducer(reducer, initialState);
	const [count, dispatch] = useReducer(reducer, initialState);
  // const [lastName, changeLastName] = useReducer(reducer, initialState);

  return (
		<div>
			{/* <Button onClick={() => curTheme === 'light' ? setCurTheme('dark') : setCurTheme('light')}> 切换主题 </Button> */}
    	<Guide />
		</div>
  );
};

export default Dashboard;
