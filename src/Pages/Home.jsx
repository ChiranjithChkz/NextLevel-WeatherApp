import React, { useState } from 'react';
import LocationsModal from '../Components/LocationsModal';

const Home = () => {

    const [click, setClick] = useState(false);
    console.log(click)
    
    return (
        <div >
          <div className='text-center'>
                 <h1 className='text-6xl text-blue-300'>NextLevel <span className='text-6xl text-blue-400'>Weather</span></h1>
                 <p className='max-w-md text-md text-gray-400 py-4'>Check your weather today in next level</p>
          </div>


             <div className='flex justify-center'>
                <button 
                type='button' 
                onClick={()=> setClick(true)}
                className='text-lg font-medium hover:scale-105 bg-blue-500 px-5 py-2 rounded-4xl  text-white cursor-pointer'>Check your weather</button>
             </div>
             {
                click && <LocationsModal onClose = {()=> setClick(false)} />
             }
         
        </div>
        
    );
};

export default Home;