
"use client";
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Image from 'next/image';




const HotelSearch: React.FC = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      const options = {
        method: 'GET',
        //url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
          query: 'Uttarakhand',
          limit: '30',
          offset: '0',
          units: 'km',
          location_id: '1',
          currency: 'INR',
          sort: 'relevance',
          lang: 'en_US'
        },
        headers: {
          //'x-rapidapi-key': '1085513bc0mshbef947ab99b5469p13384ejsned7c5f1694f0',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
      };

      try {
        const response: AxiosResponse = await axios.request(options);
        if (response.data && response.data.data) {
          setHotels(response.data.data);
          console.log(response.data);
        } else {
          console.log("No hotel data found");
        }
      } catch (error) {
        console.error(error);
        console.log("Error fetching hotel data");
      }
    };

    fetchHotelData();
  }, []);

  return (
    <section className="flex-col flexCenter overflow-hidden  py-24">
      <div className="mb-24 p-4">

        {hotels && (
          hotels.map((data: any, index: number) => (
            <div key={index} className="border border-2 p-4 mb-4">
              <div className="flex-col bg-feature-bg bg-center bg-no-repeat" style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                <div className="text-black-50">Name: {data.result_object.name}</div>
                <div>Location: {data.result_object.location_string}</div>
                <div>Rating: {data.result_object.rating}</div>
                <div>Reviews: {data.result_object.num_reviews}</div>
              </div>


            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HotelSearch;
