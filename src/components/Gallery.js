import React, { useState, useRef, useEffect } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import "./Gallery.css";

function Gallery() {
  
  const [images, setImages] = useState([
    '/images/default1.png', 
    '/images/default2.webp', 
    '/images/default3.webp' 
  ]);

  const scrollContainerRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('grayscale');
          } else {
            entry.target.classList.add('grayscale');
          }
        });
      },
      { threshold: 0.5 }
    );

    const images = document.querySelectorAll('.scroll-image');
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

 
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100, // Scroll left by 100px
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="p-4 rounded-md bg-gray-700 text-gray-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <FaRegQuestionCircle className="ml-1 text-2xl text-gray-400" />
          <h3 className="text-lg bg-black w-[110px] h-[40px] rounded-[14px] text-gray-400 flex items-center justify-center">
            Gallery
          </h3>
        </div>

        <div className="flex items-center space-x-6">
          <label className="bg-gray-600 py-2 px-4 rounded-full cursor-pointer hover:bg-gray-500 custom-shadow">
            + Add Image
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
          <FaRegArrowAltCircleLeft className="ml-2 text-4xl cursor-pointer icon-shadow" onClick={scrollLeft} />
          <FaRegArrowAltCircleRight className="ml-2 text-4xl cursor-pointer icon-shadow" onClick={scrollRight} />
        </div>
      </div>

      <div className="relative flex items-center">
        <BiGridVertical className="ml-1 text-3xl text-gray-400 flex-shrink-0" />

        <div
          className="flex overflow-x-auto space-x-2 ml-4 scrollbar-hide"
          ref={scrollContainerRef}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index}`}
              className="w-38 h-38 mt-4 ml-5 mr-5 object-cover rounded-[20px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 scroll-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
