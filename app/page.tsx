import React, { useState, useEffect } from 'react';
import ClanWarEndTime from '../components/ClanWarEndTime';


const Page: React.FC = () => {
  return (


    <div className='main'>
      <div className='section'>
        <h1>
          Omega CZ
        </h1>


      </div>

      <div className='section'>
        <ClanWarEndTime />
      </div>

    </div>



  );
};

export default Page;