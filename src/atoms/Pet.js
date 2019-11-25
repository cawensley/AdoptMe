import React from "react";
import {Link} from '@reach/router';

export default function Pet ({name,animal,breed,media,location,id}) {
    let facephoto = 'http://www.met.gov.my/content/wxicon/observation_icons/NA.png';
    if(media.length) {
        facephoto = media[0].small;
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={facephoto} alt={name}/>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>
    )
};
