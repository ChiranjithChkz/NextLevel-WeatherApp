import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { getWeather } from '../Service/get-weather';
import { MapPin } from 'lucide-react';
import WeatherCard from '../Components/WeatherCard';
import RecommendationCard from './../Components/RecommendationCard';
import WeatherType from './../Components/WeatherType';
import { getRecommandations } from '../Utils/getRecommendation';
import Loader from '../Components/Loader';
import LocationsModal from '../Components/LocationsModal';
 


const Weather = () => {
    const value = useLocation();
    const place = value.state.location;
   // getWeather(place);
   const [weather, setWeather] = useState(null);
   //console.log("weather", weather);


   const [loading , setLoading] = useState(false);
   const [open, setOpen] = useState(false);

   useEffect(()=> {

    if(!place){
        return
    }
    const fetchWeather =  async () => {

        setLoading(true)
        try {
            const result = await getWeather(place);
            //console.log(result);
            setWeather(result);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
            setOpen(false);
        }
    }

    fetchWeather();
   }, [place]);



    return (
        <div className="max-w-6xl mx-auto my-5 px-4 sm:px-6 lg:px-8">

             <header className='py-4 cursor-pointer'>
                        {
                            ! loading &&
                             <div  className='flex items-center   justify-between'>
                                    <div className='hover:scale-105' >
                                    <Link className='border border-2  rounded-2xl  md:p-3 p-1.5 bg-red-400 text-white' to={"/"}>Go Back</Link>
                                    </div>

                                    <div className='font-bold '>
                                            <h1 className='md:text-3xl text-blue-300 items-center flex flex-col'>NextLevel <span className='md:text-3xl text-blue-700 text-2xl'>Weather</span></h1>
                                            
                                    </div>

                                    <div>
                                        <button onClick={()=> setOpen(true)}  className='md:text-lg md:font-medium hover:scale-105 bg-blue-500 md:px-5 md:py-2
                                        p-1.5 rounded-4xl  text-white cursor-pointer' type='button'>
                                            change location
                                        </button>
                                    </div>

                            </div>
                        }
            </header>
           
            {
                loading ? 
                <Loader/> :
                 <div>
                   
                        <div className='grid md:grid-cols-2 gap-5 '>
                            <div className='space-y-3'>
                                 <div className='shadow-2xl rounded-2xl  p-5 border-2 border-amber-500'>

                                    {/* weather card */}
                                    <WeatherCard place={place}  weather={weather} />
                                </div>
                                    {/* weather recommendation */}
                                <RecommendationCard recommendation={getRecommandations(weather)} />
                                

                            </div>
                                {/* weather type */}
                                <WeatherType place={place}  weather={weather}  />
                        </div>
                 </div>



            }

            {open && <LocationsModal onClose={()=> setOpen(false)}/>}
        </div>
    );
};

export default Weather;