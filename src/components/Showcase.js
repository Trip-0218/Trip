// showcase.js
import React from 'react';
import Header from './Header';


const Showcase = () => {
  return (
    <section className='showcase'>
      <Header/>
      <div className='showcase-overlay'>
        <h1>Showcase Travel Agency</h1>
        <p>
          Get to tour the world in style. Select a destination, book your
          flight, and off you go!
        </p>
        
        
      </div>
    </section>
  );
};

export default Showcase;

