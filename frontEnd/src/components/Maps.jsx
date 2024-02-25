// import React, { useEffect, useState } from "react";
// import {
//     GoogleMap,
//     LoadScript,
//     Marker,
//     useLoadScript,
// } from "@react-google-maps/api";
// import axios from "axios";

// const libraries = ["places"];
// const mapContainerStyle = {
//     width: "100%", // Adjust width as needed
//     height: "400px", // Adjust height as needed
// };

// function Maps() {
//     const [places, setPlaces] = useState([]);
//     // const [center, setCenter] = useState({ lat: 30.375306, lng: 69.345102 });
//     // const { isLoaded, loadError } = useLoadScript({
//     //     libraries,
//     // });



// //     const axios = require('axios');

// // const options = {
// //   method: 'GET',
// //   url: 'https://map-places.p.rapidapi.com/details/json',
// //   params: {
// //     place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
// //   },
// //   headers: {
// //     'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
// //     'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
// //   }
// // };

// // try {
// // 	const response = await axios.request(options);
// // 	console.log(response.data);
// // } catch (error) {
// // 	console.error(error);
// // }


//     useEffect(() => {
//         const fetchData = async (retryCount = 3) => {
//             try {
//                 const response = await axios.request({
//                     method: "GET",
//                     url: "https://map-places.p.rapidapi.com/details/json",
//                     params: {
//                         location: "30.3753,69.3451",
//                         radius: "180",
//                         language: "en",
//                     },
//                     headers: {
//                         'X-RapidAPI-Key': '79e636b089msh997aa1c461e0614p10c0cbjsn8c62dd36bb3c',
//                         'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
//                       },
//                 });
//                 console.log(response.data)

//                 setPlaces(response.data.results);
//             } catch (error) {
//                 if (error.response && error.response.status === 429 && retryCount > 0) {
//                     // If it's a 429 error, retry after a delay
//                     console.log(`Rate limited. Retrying after delay. Retries left: ${retryCount}`);
//                     setTimeout(() => fetchData(retryCount - 1), 1000); // Adjust the delay as needed
//                 } else {
//                     console.error(error);
//                 }
//             }
//         };

//         fetchData();
//     }, []);

//     // if (!isLoaded) {
//     //     return <div>Loading maps...</div>;
//     // }

//     // if (loadError) {
//     //     return <div>Error loading maps: {loadError.message}</div>;
//     // }

//     console.log("Places:", places);
//     return (
//         // <LoadScript>
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 // zoom={10}
//                 // center={center}
//             >
//                 {/* Display markers for each place */}
//                 {places.map((place) => (
//                     <Marker
//                         key={place.place_id}
//                         position={{
//                             lat: place.location.lat,
//                             lng: place.location.lng,
//                         }}
//                     />
//                 ))}
//             </GoogleMap>
//         // </LoadScript>
//     );
// }

// export default Maps;
