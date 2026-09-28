import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getGeolocation } from '../Service/get-geolocation';
import { useNavigate } from 'react-router';

const LocationsModal = ({onClose}) => {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [city, setCity] = useState("");

    const gotoPage = (location) => {
        navigate("/weather", {state : {location}})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const value = city.trim()
       // console.log(value);

       if(!value){
        setError(" Please enter the city name ");
        return;
       }
       
       try {
          const location = await getGeolocation(value);
        //   console.log(result);
            if(!location){
                setError("Geocoding request failed!")
            }
            gotoPage(location);

        } catch (error) {
            // console.log(error);
            setError(error);
        }

    }

    const handleGeoLocation = () => {

        if(!navigator.geolocation){
            setError("Geolocation not found!")
            return ;
        }
        navigator.geolocation.getCurrentPosition
        ((positions)=> {
            
            const {latitude, longitude} = positions.coords
          //  console.log({latitude, longitude})
          gotoPage({name: "Your Location", lat: latitude, lon : longitude})

        } ,(error) => {
           // console.log(error)
           setError(error.message);
        },{
            timeout: 10000 
        })
    }
    return (
        <div className='fixed inset-0 flex justify-center  items-center bg-gray-600/60'>  
             <div className=" w-[400px] bg-gray-100 shadow-2xl rounded-2xl p-5 ">
               <div className='flex justify-between '>
                  <h2 className='text-xl font-medium '>Where are you today?

                 </h2>
                  <button className='cursor-pointer' onClick={onClose}><X /></button>
               </div>

             <div className='ptr-8 py-3'>
                 <form onSubmit={handleSubmit}  className='space-y-5 '>
                        <input 
                        placeholder='Enter city name: '
                        type="text" 
                        value={city}
                        onChange={(e)=> setCity(e.target.value)}
                        className='w-full border p-2 rounded-2xl '/>

                        <div className=''>
                        <button 
                        type='submit' 
                        className='text-lg font-medium w-full hover:scale-105 bg-blue-500 px-5 py-2 rounded-4xl  text-white cursor-pointer'>Get Weather</button>
                    </div>
                 </form>

                 <div className='p-1 text-center'>or</div>

                <div className='flex justify-center '>  
                        <button 
                        type='submit' 
                        onClick={handleGeoLocation}
                        className='text-lg font-medium w-full hover:scale-105 bg-blue-500 px-5 py-2 rounded-4xl  text-white cursor-pointer'>Use my location</button>
                </div>

               
             </div>

            <div className='text-center'>
                  {
                error && <p className='text-red-700 font-bold'>{error}</p>
                }
            </div>
            </div>
        </div>
    );
};

export default LocationsModal;