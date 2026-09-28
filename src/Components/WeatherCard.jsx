import { MapPin } from "lucide-react";
import StackCard from "./StackCard";

 

const WeatherCard = ({weather, place}) => {

    const stack = [
        {icon: " " ,label: "Feels like ", value: `${weather?.feelsLike}`},
        {icon: " " ,label: "Humidity ", value: `${weather?.humidity}`},
        {icon: " " ,label: "Wind Speed ", value: `${weather?.windSpeed}`},
    ]
    return (
         <div className='space-y-4'>
                        <h1 className='text-pink-700 font-semibold md:text-2xl text-xl'>Todays Weather Details</h1>
                            <div className='flex items-center gap-3'>
                                <MapPin size={30} />
                                <h2 className='text-purple-800 font-bold text-4xl'>{place.name}</h2>
                            </div>

                            <div className='flex items-center justify-between gap-6'>
                                <h3 className='md:text-6xl text-4xl font-extrabold text-purple-800'>{weather?.temperature}c</h3>
                                
                                <p className='text-purple-800 font-extrabold text-4xl'>{weather?.description}</p>
                            </div>
                            



                           <div className="md:flex items-center justify-between grid grid-cols-2 gap-2 hover:scale-100">
                                 {
                                stack.map((s,index)=>( <StackCard key={index} s={s}/> ))
                                 }
                           </div>
                           
                          
        </div>
    );
};

export default WeatherCard;