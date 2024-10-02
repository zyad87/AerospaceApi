import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Card from '../components/Card';

function Details() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [ability1, setability1] = useState('N/A');
  const [ability2, setability2] = useState('N/A');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    axios
      .get(`https://finalspaceapi.com/api/v0/character/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
        response.data.abilities.length > 0
          ? setability1(response.data.abilities[0])
          : setability1('N/A');
        response.data.abilities.length > 1
          ? setability2(response.data.abilities[1])
          : setability2('N/A');

        setloading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div>
      <NavBar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {loading === true && (
            <>
              {' '}
              <span className="loading loading-dots loading-lg"></span>
            </>
          )}
          {loading === false && (
            <div className="shadow-lg p-10 bg-base-300 rounded-lg flex  gap-10 flex-row-reverse max-md:flex-col justify-center max-md:max-w-xs">
              <img
                src={data.img_url}
                className="max-w-[100%] rounded-lg shadow-2xl "
              />
              <div className="flex flex-col">
                <h1 className=" max-md:text-xl text-5xl font-bold text-center mb-2">
                  Hi I'm{' '}
                  <span className="w-full text-purple-500">{data.name}</span>
                </h1>
                <Card
                  gender={data.gender}
                  species={data.species}
                  status={data.status}
                  ability1={ability1}
                  ability2={ability2}
                  origin={data.origin}
                />

                <button
                  onClick={() => {
                    navigate('../');
                  }}
                  className="btn btn-primary"
                >
                  Back to menu
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
