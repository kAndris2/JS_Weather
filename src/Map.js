import React, {Component} from 'react';

class Map extends Component {

    componentDidMount(){
        this.test();
    }
    test(){
        var L = window.L;
        var city = this.props.city;
        var mymap = L.map('mapid').setView(this.props.pos, 13);
        var marker = L.marker(this.props.pos).addTo(mymap);
        console.log(city);
        marker.bindPopup("<b>Ez itt "+ city +"!</b><br>Ez meg a kert.").openPopup();
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);
    }

    render (){
        return(
            <div id="mapid" style={{height:'700px'}}></div>
        );
    }
}
export default Map;