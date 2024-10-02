import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import CardHome from '../components/CardHome';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  function showDetails(id) {
    navigate(`./${id}`);
  }
  function deleteItem(id) {
    setdata(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function fetchData() {
    axios
      .get('https://finalspaceapi.com/api/v0/character/')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
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
      <div className="flex flex-wrap justify-center items-center gap-16 my-5 mx-4">
        {loading === true && (
          <>
            {' '}
            <span className="loading loading-dots loading-lg"></span>
          </>
        )}

        {loading === false &&
          data.map((item) => {
            return (
              <CardHome
                key={item.id}
                name={item.name}
                img_url={item.img_url}
                onClick={() => {
                  showDetails(item.id);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
