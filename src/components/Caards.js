
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ReactStars from "react-stars";
import {getDocs} from "firebase/firestore"
import {moviesRef} from "../firbase/Firebase"


const Caards = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef)
      console.log(_data);
      _data.forEach( => {
        
      });
      setLoading(false);
    }
    getData()
  }, [])

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {loading ? <div className="w-full flex justify-center items-center h-96"> <TailSpin height={40} color='white'/> </div> :
        data.map((e, i) => {
            return (
              <div key={i} className=" font-medium bg-gray-900 shadow-lg p-3 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-300">
                <img className="h-72" src={e.image} />
                <h1>
                  <span className="text-blue-500">Name : </span>{e.title}
                </h1>
                <h1 className="flex items-center">
                  <span className="text-blue-500  mr-1">Rating : </span>
                  <ReactStars size={25}
                    half={true}
                    color2={'#ffd700'}
                    edit={false}
                    value={5}
                    count={5} />
                </h1>
                <h1>
                  <span className="text-blue-500">Year : </span>{e.year}
                </h1>
              </div>
            );
          })
          }
    </div>
  );
};

export default Caards;
