import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const clickHandler = ()=>{console.log('you clicked me')}
  return (
    <>
    <section className='container'>
      <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button className='button' onClick= {() => setPeople([])}>Clear All</button>
    </section>
    </>
  )
}

export default App;
