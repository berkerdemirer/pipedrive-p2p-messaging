import React, {useEffect} from 'react';
import './index.css';
import {renderMap} from "../../utils";

function Map() {

    useEffect(() => {
        renderMap();
    }, []);

    return (
        <>
            <div id="map"/>
        </>
    );
}

export default Map;