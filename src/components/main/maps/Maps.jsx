import React, {useState} from "react";
import { MapsStl } from "./maps.style";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, divIcon, point } from 'leaflet';
// import {Marker} from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import icon from '../../../images/maps/iconDrinkGo.svg'

export const Maps = () => {
    const [skinMaps, setSkinMaps] = useState(0);
    const position = [64.556722, 39.799052] // позиция центрирования при первоначальной загрузке
    const markers = [
        {
            id: 1,
            coordinates: [64.556722, 39.799052],
            popupText: 'Drink Go - филиал 1', 
        },
        {
            id: 2,
            coordinates: [64.551900, 39.786093],
            popupText: 'Drink Go -филиал 2', 
        },
        {
            id: 3,
            coordinates: [64.524379, 40.601810],
            popupText: 'Макси', 
        },
        {
            id: 4,
            coordinates: [64.525673, 40.603591],
            popupText: 'Дом', 
        },
        {
            id: 5,
            coordinates: [64.526061, 40.597325],
            popupText: 'Здание', 
        }
    ]
    const skinsMaps = [
        {
            id: 0,
            skinUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
            id: 1,
            skinUrl: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        },
        {
            id: 2,
            skinUrl: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        },
        {
            id: 3,
            skinUrl: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png',
        },
        {
            id: 4,
            skinUrl: 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
        },
    ]
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
            // /* eslint-disable */
            iconSize: point(33, 33, true)
        })
    }

    const handleMaps = (e) => {
        setSkinMaps(e.target.value)
        return console.log(e.target.value)
    }
    return (
        <MapsStl>
            
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                <select className='maps__select' onChange={(e)=>{handleMaps(e)}}>
                    <option value={0}>openstreetmap</option>
                    <option value={1}>stadiamaps</option>
                    <option value={2}>thunderforest</option>
                    <option value={3}>stadiamaps</option>
                    <option value={4}>mtbmap</option>
                </select>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
