import React from 'react';

function Card(props) {
  return (
    <div className="rounded overflow-hidden">
      <div className="py-4 px-3">
        <div className="font-bold text-xl mb-2 max-md:text-sm">
          Status: <span className="text-purple-500 ">{props.status}</span>
        </div>
        <div className="font-bold text-xl mb-2 max-md:text-sm">
          Species: <span className="text-purple-500">{props.species}</span>
        </div>
        <div className="font-bold text-xl mb-2 max-md:text-sm ">
          Gender: <span className="text-purple-500">{props.gender}</span>
        </div>
        <div className="font-bold text-xl mb-2 max-md:text-sm ">
          Origin: <span className="text-purple-500">{props.origin}</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        Abilities
        <div className='mt-2 mb-3'>
          <span className="inline-block bg-purple-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.ability1}
          </span>
          <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.ability2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
