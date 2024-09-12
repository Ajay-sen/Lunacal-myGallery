import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Recommendation from './components/Recommendation';
import Gallery from './components/Gallery';
import "./index.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import { PiLineVerticalBold } from "react-icons/pi";

function App() {
  const [activeSection, setActiveSection] = useState('about'); 

  return (
    <div className="App flex h-screen bg-gray-900">
      
      <div className="w-1/2 mt-10 mb-10 ml-16 mr-4 bg-gray-500 rounded-[20px]">
       
      </div>

      
      <div className="w-1/2 flex flex-col bg-gray-900">
        
        <div className="flex flex-col ml-10 mt-10 mb-10 mr-14  h-1/2 bg-gray-700 text-gray-300 rounded-[20px] h-[400px] w-[650px]">
         
          <div className="flex items-center p-2 mt-4 ml-2 bg-gray-700">
           
            <div className="flex items-center justify-center mr-4 text-2xl text-gray-400">
              <FaRegQuestionCircle />
            </div>

           
            <div className="flex justify-around items-center bg-black rounded-[20px] h-[60px] w-[600px]">
  <div
    className={`flex items-center justify-center h-[50px] w-[150px] ${activeSection === 'about' ? 'bg-gray-900 shadow-md' : 'bg-black'} rounded-[20px] transition-shadow duration-300`}
    onClick={() => setActiveSection('about')}
  >
    About Me
  </div>

  <div
    className={`flex items-center justify-center h-[50px] w-[150px] ${activeSection === 'experience' ? 'bg-gray-900 shadow-md' : 'bg-black'} rounded-[20px] transition-shadow duration-300`}
    onClick={() => setActiveSection('experience')}
  >
    Experiences
  </div>

  <div
    className={`flex items-center justify-center h-[50px] w-[150px] ${activeSection === 'recommendation' ? 'bg-gray-900 shadow-md' : 'bg-black'} rounded-[20px] transition-shadow duration-300`}
    onClick={() => setActiveSection('recommendation')}
  >
    Recommended
  </div>
</div>

        </div>

          <div className="flex items-center p-2 mt-4 ml-2 bg-gray-700">
            <div className="flex items-center justify-center mr-4 text-4xl text-gray-400">
              <BiGridVertical />
            </div>
            <div className="flex-1 ">
              {activeSection === 'about' && <About />}
              {activeSection === 'experience' && <Experience />}
              {activeSection === 'recommendation' && <Recommendation />}
            </div>
            <div className=" text-6xl text-gray-300" style={{ height: '100px' }}>
              <PiLineVerticalBold className="h-full" />
            </div>

          </div>
        </div>
       
        <div className="h-1/2 ml-10 mb-10 mr-14  bg-gray-700 rounded-[20px]">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
