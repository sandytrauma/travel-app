import React from 'react';
import HotelSearch from './HotelSearch';

interface CardProps {
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ title, description }) => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
    </div>
    </section>
  );
};

export default Cards;
