import React from 'react';

function CardHome(props) {
  return (
    <div className="rounded overflow-hidden shadow-lg  max-w-[100%]">
      <img
        className="w-[300px] h-[300px] my-2"
        src={props.img_url}
        alt="Sunset in the mountains"
      />
      <div className="px-6 mb-6">
        <div className="text-xl tracking-wider flex justify-center items-center ">
          <span className="text-primary text-center max-w-52 ">
            {' '}
            {props.name}
          </span>
        </div>
      </div>
      <div className="px-6  py-2">
        <div className="flex justify-center items-center gap-4 my-4">
          <button
            onClick={props.onClick}
            className="btn btn-outline btn-primary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHome;
