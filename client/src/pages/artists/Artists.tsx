import React, { ChangeEvent, useEffect, useState } from "react";
import api from "../../axios";

import staticPath from "../../utils/staticPath";

import "./style.scss"

const Artists = () => {
    
    const [artist, setArtist] = useState([]);
    
    useEffect(() => {
        api.get("api/v1/artists").then(({ data, status }) => {
            if (status === 200) {
                observationHandler()
                setArtist(data.artists);
            }
        });
    }, []);
    
    function observationHandler(){
        const images = document.querySelectorAll(".lazy")
        let lazyImageObserver = new IntersectionObserver(function (entries, observer){
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    entry.target.classList.add("lazy-loaded")
                    const img = entry.target.children[0] as HTMLImageElement
                    img.setAttribute("src", img.dataset.source ? img.dataset.source : "")
                    img.removeAttribute("data-source")
                }
            })
        })
        
        images.forEach(image=> lazyImageObserver.observe(image) )
    }
    
    
    
    return (
        <div className="container">
      
          <h1>Music Artists</h1>
     
          <div className="artist-list flex flex-wrap">
            {artist.map((ar: any) => (
                <div className="artist-item flex justify-between flex-col items-center">
                  <div className="">
                    <div className="lazy artist-image">
                        <img className="w-full" data-source={staticPath(ar.avatar)} src="/bitmap.png" alt=""/>
                    </div>
                  </div>
                  <div className="">
                    <h4>{ar.name}</h4>
                  </div>
                </div>
            ))}
          </div>
      
        </div>
    );
};

export default Artists;