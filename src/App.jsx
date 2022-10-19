import { useState } from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



function Counter() {

  const [count, setCount] = useState(0);
  const [isLit, setIsLit] = useState(true);

  return (
    <div className={(isLit) ? 'lit' : 'dark'} >

      <div className='head'>

        <button className={(isLit) ? 'button lit' : 'button dark'}
          onClick={() => { setIsLit(!isLit) }}>
          {
            (isLit) ? <FontAwesomeIcon icon={faSun} size='3x' title='Light mode' />
              : <FontAwesomeIcon icon={faMoon} size='3x' title='Dark mode' />
          }
        </button>


      </div>
      <div className='subhead'><h2>Room is {(isLit) ? "lit" : "dark"}</h2></div>
      <h1 className='counterhead'>Number Counter</h1>
      <div className='mainCounter'>
      <div className='counter'>
        <button className={(isLit) ? 'countButton lit' : 'countButton dark'}
          onClick={() => { setCount(count + 1) }}>Counter &gt;&gt;
        </button>
        <div className='countervalue'>Counter value: {count}</div>
        <button className={(isLit) ? 'countButton lit' : 'countButton dark'}
          onClick={() => { setCount(count - 1) }}>Counter &lt;&lt;
        </button>
      </div>
      </div>
      
    </div>
  );
}

export default Counter;
