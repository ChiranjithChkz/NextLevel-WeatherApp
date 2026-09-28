import React from 'react';

const StackCard = ({s}) => {
    return (
         <div className='shadow-xl p-4 rounded-2xl text-center '>
                                    <h3 className='text-lg text-purple-600 font-extrabold'>{s?.label}</h3>
                                    <p className='font-extrabold text-4xl text-purple-700'>{s?.value}</p>
         </div>
    );
};

export default StackCard;