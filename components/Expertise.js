import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <section className='expertise'>
      <div className='container'>
        <div className='heading-title'>
          <Title title='EVOsphere expertise' />
          <p>Connect, Engage and Grow with EVOsphere!</p>
        </div>
        <div className='hero-content grid-4'>
          {expertise.map((item) => (
            <Card data={item} key={item.id}  path='/' />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
