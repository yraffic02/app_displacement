'use client'
import { Button, Skeleton, TextField } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const center = { lat: 48.8584, lng: 2.2945 }

export default function GoogleMaps() {
    const apiKey = process.env.API_KEY_MAPS || ''
    const [map, setMap] = useState<google.maps.Map | any>(null)
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: apiKey})


    if (!isLoaded) {
        return <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width='100vw'
            height='100vh'
        />
    }
    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <div className="flex gap-4">
                    <TextField id="standard-basic" label="origem" variant="standard" />
                    <TextField id="standard-basic" label="destino" variant="standard" />
                    <Button variant="outlined">calcular</Button>
                </div>
                <div className="flex gap-4" >
                    <p>distancia</p><span></span>
                    <p>duração</p><span></span>
                    <div onClick={()=> map.panTo(center)}>
                        <NavigationIcon />
                    </div>
                </div>
            </div>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{
                    width: '100vw',
                    height: '100vh'
                }}
                options={{
                    fullscreenControl: false,
                    zoomControl: false
                }}
                onLoad={(map)=> setMap(map)}
            >
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}