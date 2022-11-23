import React from 'react';
import MusicPlayer from "./MusicPlayer";
// import { motion } from 'framer-motion';
// import { VisibilitySensor } from 'react-visibility-sensor';

function Search() {
//     const [elementIsVisible, setElementIsVisible] = useState(false);
//   const bg = {
//     true: {
//       left: "-44rem",
//     },
//     false: {
//       left: "-50rem",
//     },
//   };
//   const redimg = {
//     true: {
//       left: "18rem",
//     },
//     false: {
//       left: "16rem",
//     },
//   };
//   const musicimg = {
//     true: {
//       left: "2rem",
//     },
//     false: {
//       left: "6rem",
//     },
//   };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      <MusicPlayer />
    </div>
  )
};

export default Search;