import React, {Component} from 'react'
import {Map, TileLayer} from 'react-leaflet';

export default class SimpleMap extends Component {

    render() {
        return (
            <Map center={[36.322356, 139.013057]}
                 zoom={15}
                 style={{height: '600px'}}>
                <TileLayer url="http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"/>
            </Map>

        );
    }
}