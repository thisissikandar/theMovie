import React, { useState } from "react";
import ReactStars from "react-stars";


const Caards = () => {

  const [data, setData] = useState([
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: "GodFather",
      year: "2000",
      rating: 5,
      img: 'https://m.media-amazon.com/images/I/61jDsQrXfMS._AC_UL480_FMwebp_QL65_.jpg'
    }
  ])
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div key={i} className=" font-medium bg-gray-900 shadow-lg p-3 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-300">
            <img className="h-72" src={e.img}/>
            <h1>
              <span className="text-blue-500">Name : </span>{e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-blue-500  mr-1">Rating : </span>
              <ReactStars size={25}
              half={true}
              color2={'#ffd700'}
              edit={false}
              value={e.rating}
              count={5}/>
            </h1>
            <h1>
              <span className="text-blue-500">Year : </span>{e.year}
            </h1>
          </div>
        )
      })
      }
    </div>
  );
};

export default Caards;
