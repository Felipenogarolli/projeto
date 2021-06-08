import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Rodape from './rodape';
import marker from '../img/map-marker-red.png'
import { Container, Row, Col, } from "react-bootstrap";

function PaginaMap() {

    interface Viewport {
        latitude: number,
        longitude: number,
        zoom: number,
        width: number,
        height: number,
        pitch: number,
    }

    let [viewport, setViewport] = useState({
        latitude: -25.4354136,
        longitude: -49.1904301,
        zoom: 14,
        width: window.innerWidth,
        height: window.innerHeight,
        pitch: 50
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <ReactMapGL
                        mapboxApiAccessToken={"pk.eyJ1IjoiZ3VpcGIxIiwiYSI6ImNrb285Zno5ODAyaDEydm5zY21haTRhM3YifQ.T6_MeIr8EEEhBCyzvOqzcQ"}
                        {...viewport}
                        onViewportChange={(newView: Viewport) => setViewport(newView)}
                    >
                        <Marker latitude={-25.421475} longitude={-49.1877567} offsetTop={(-viewport.zoom * 3) / 2}>
                            <img alt="map" src={marker} width={viewport.zoom * 3} height={viewport.zoom * 3} />
                        </Marker>
                    </ReactMapGL>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Rodape/>
                </Col>
            </Row>
        </Container>



    );

}
export default PaginaMap;