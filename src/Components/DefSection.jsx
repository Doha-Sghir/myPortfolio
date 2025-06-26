import React from 'react';
import profile from '../assets/Profile_without_bg.png';
import background from '../assets/Bg_for_myportfolio.png';
import { Laptop, Mouse } from 'lucide-react';

export default function DefSection() {
  const text =
    "I'm a second-year Computer Science Engineering student at the National School of Applied Sciences of Fez. I'm passionate about web development and always eager to learn and take on new challenges. I'm currently looking for opportunities to apply my skills and gain hands-on experience in the field.";

  const delay = 50; // base delay in ms

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="px-5 py-10 sm:px-30 sm:py-20 
                      grid sm:grid-cols-2 grid-cols-1 items-center" >
        <img src={profile} className="sm:w-3/5 w-full" data-aos='zoom-in' delay='500'/>
        <p className="font-bonheur text-4xl px-10">
          {text.split(' ').map((word, index) => (
            <span
              key={index}
              data-aos="zoom-in"
              data-aos-delay={delay * index} 
              className="inline-block mr-3"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
