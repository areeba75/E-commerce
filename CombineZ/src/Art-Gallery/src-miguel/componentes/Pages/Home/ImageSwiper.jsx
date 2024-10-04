// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import image1 from "../images/DO_001_BajaDonkey.webp";
// import image2 from "../images/DO_002_BlueDonkeyDoor.webp";
// import image3 from "../images/DO_003_RedDonkeyDoor.webp";
// import image4 from "../images/DO_004_DounpourDonkey.webp";
// import image5 from "../images/5.webp";
// import image6 from "../images/DO_006_ThreeDonkeys.webp";
// import image7 from "../images/DO_007_TresDonkeys.webp";
// import image8 from "../images/DO_008_ThreeCuriousDonkeys.webp";
// import image9 from "../images/DO_009_-Crazy-5-Donkeys.webp";
// import image10 from "../images/DO_010_SepiaCrazy5Donkeys.webp";

// export const imge = [
//   {
//     image:image1, 
//     caption: "[DO#001] Baja Donkey From  $95",
//   },
//   {
//     image: image2,
//     caption: "[DO#002] Blue Donkey Door From  $95",
//   },
//   {
//     image: image3,
//     caption: "[DO#003] Red Donkey Door From  $95",
//   },
//   {
//     image: image4,
//     caption: "[DO#004] Down Pour Donkey Door From  $95",
//   },
//   {
//     image: image5,
//     caption: "[DO#005] Tourquoise Donkey Door From $95",
//   },
//   {
//     image: image6,
//     caption: "[DO#006] Three Donkeys From  $95",
//   },
//   {
//     image: image7,
//     caption: "[DO#007] Tres Donkies From  $95",
//   },
//   {
//     image: image8,
//     caption: "[DO#008] Three Curious Donkeys From  $95",
//   },
//   {
//     image: image9,
//     caption: "[DO#009] Colorful Crazy 5 Donkeys From  $95",
//   },
//   {
//     image: image10,
//     caption: "[DO#010] Sepia Crazy 5 Donkeys From  $95",
//   },
// ];

// const ImageSwiper = () => {
//   return (
//     <div className="w-full h-screen  flex justify-center items-center">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         className="w-2/5 h-1/5"
//       >
//         {imge.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col items-center">
//               <img 
//                 src={item.image} // Directly referencing the image
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <p className="text-white mt-4">{item.caption}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSwiper; 
