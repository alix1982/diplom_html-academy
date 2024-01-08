import React, {useState} from "react";
import { MapsStl } from "./maps.style";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, divIcon, point } from 'leaflet';
// import {Marker} from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import icon from '../../../images/maps/iconDrinkGo.svg';
import { markers, skinsMaps } from "./mapsConstant";

export const Maps = () => {
    const [skinMaps, setSkinMaps] = useState(0);
    
    const position = [64.556722, 39.799052] // позиция центрирования при первоначальной загрузке

    const iconDrinkGo = new Icon({
        // iconUrl: 'https://cdn-icons-png.flaticon.com/512/96/96614.png',
        iconUrl: icon,
        // iconUrl: require('../../../images/maps/mapPin.png'),
        // iconSize: [38, 38],
        iconSize: [38, 50],
    })
    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true)
        })
    }

    const handleMaps = (e) => {
        setSkinMaps(e.target.value)
    }
    return (
        <MapsStl id="maps">
            
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                <select className='maps__select' onChange={(e)=>{handleMaps(e)}}>
                    <option value={0}>openstreetmap</option>
                    <option value={1}>stadiamaps</option>
                    <option value={2}>thunderforest</option>
                    <option value={3}>stadiamaps</option>
                    <option value={4}>mtbmap</option>
                </select>
                <TileLayer
                    attribution={skinsMaps[skinMaps].attribution}
                    url={skinsMaps[skinMaps].skinUrl}
                />
                <MarkerClusterGroup
                    chunkedLoading // для фрагментарной загрузки в случае добавления кастомной обьединенной иконки
                    iconCreateFunction={createCustomClusterIcon}
                >
                    { markers.length > 0 && markers.map(marker => 
                        <Marker key={marker.id} position={marker.coordinates} icon={iconDrinkGo}>
                            <Popup>
                                {/* <h3>Привет, я всплывающее окно!</h3> */}
                                {marker.popupText}
                            </Popup>
                        </Marker>
                    )}    
                </MarkerClusterGroup>
                {/* <MinimapControl position="topright" /> */}
            </MapContainer>
        </MapsStl>
    );
    }
