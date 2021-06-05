import React from 'react';
import Rodape from './rodape';
import { TileLayer, MapContainer, Popup, Marker } from 'react-leaflet';

function PaginaMap() {
    return (
        <div id="mapid" style={{height:'180px'}}>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
                </Marker>
            </MapContainer>

            <Rodape />


        </div>
    );
}
export default PaginaMap;