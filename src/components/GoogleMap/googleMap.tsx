'use client'
import NavigationIcon from '@mui/icons-material/Navigation';
import { Alert, Fab, Skeleton, Stack } from "@mui/material";
import {
    Autocomplete,
    DirectionsRenderer,
    GoogleMap,
    Marker,
    useJsApiLoader
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { MyButton } from '../Button/MyButton';


export const GoogleMaps = () => {
    const [map, setMap] = useState<google.maps.Map | any>(null)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAPS || '',
        libraries: ['places']
    })
    const [distance, setDistance] = useState<string>('')
    const [duration, setDuration] = useState<string>('')
    const [directionsResponse, setDirectionResponse] = useState<google.maps.DirectionsResult | null>(null)
    const originRef = useRef<HTMLInputElement | null>(null)
    const distiantionRef = useRef<HTMLInputElement | null>(null)
    const [currentCenter, setCurrentCenter] = useState<google.maps.LatLngLiteral | google.maps.LatLng | undefined>(undefined)
    const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | google.maps.LatLng>({
        lat: 0,
        lng: 0
    })
    const [currentAddress, setCurrentAddress] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrentCenter({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
            setCurrentPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
            getAddressFromCoordinates(pos.coords.latitude, pos.coords.longitude)
        })
    }, [])

    const getAddressFromCoordinates = (latitude: number, longitude: number) => {
        if (typeof google === 'undefined') {
            setTimeout(() => getAddressFromCoordinates(latitude, longitude), 100);
            return;
        }
        const geocoder = new google.maps.Geocoder()
        const location = new google.maps.LatLng(latitude, longitude)

        geocoder.geocode({ location }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results && results.length > 0) {
                setCurrentAddress(results[0].formatted_address)
            }
        })
    }

    const calculateRoute = () => {
        if (originRef.current?.value === '' || distiantionRef.current?.value === '') {
            return setErrorMessage(true)
        }


        const directionService = new google.maps.DirectionsService()

        const origin = originRef.current?.value ?? ''
        const destination = distiantionRef.current?.value ?? ''

        const request: google.maps.DirectionsRequest = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        }

        directionService.route(request, (response: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
            try {
                if (status === google.maps.DirectionsStatus.OK && response) {
                    setDirectionResponse(response)
                    setDistance(response.routes[0].legs[0].distance?.text || '')
                    setDuration(response.routes[0].legs[0].duration?.text || '')
                }
            } catch (error) {
                console.log(error)
            }

        })
    }

    const cleanRoute = () => {
        setDirectionResponse(null)
        setDistance('')
        setDuration('')
        distiantionRef.current!.value = ''
    }

    const closeError = () => setErrorMessage(false)

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
            <div className="flex flex-col gap-2 absolute bottom-10 z-50  bg-white rounded-xl p-4 w-4/5">
                {
                    errorMessage &&
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error" onClick={closeError} >Preencha sua origem e destino - Por favor !</Alert>
                    </Stack>
                }
                <div className="flex flex-col gap-4">
                    <Autocomplete >
                        <input
                            type="text"
                            ref={originRef}
                            value={currentAddress}
                            onChange={(e) => setCurrentAddress(e.target.value)}
                            placeholder='origem'
                            className='w-full h-10 p-2 bg-slate-100 rounded-lg'
                        />
                    </Autocomplete>

                    <Autocomplete>
                        <input
                            type="text"
                            ref={distiantionRef}
                            placeholder='destino'
                            className='w-full h-10 p-2 bg-slate-100 rounded-lg'
                        />
                    </Autocomplete>

                </div>
                <div className="flex gap-4 items-center justify-center" >
                    <p>distancia:</p>
                    <span>{distance}</span>

                    <p>duração:</p>
                    <span>{duration}</span>

                    <MyButton type='primary' name='calcular rota' onClick={calculateRoute} />

                    <MyButton type='secondary' name='Limpar' onClick={cleanRoute} />

                    <Fab variant='circular' onClick={() => map.panTo(currentCenter)}>
                        <NavigationIcon />
                    </Fab>

                </div>
            </div>
            <GoogleMap
                center={currentCenter}
                zoom={17}
                mapContainerStyle={{
                    width: '100vw',
                    height: '100vh'
                }}
                options={{
                    fullscreenControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    restriction: {
                        latLngBounds: {
                            north: 5.2719,
                            south: -33.7684,
                            west: -74.0234,
                            east: -32.4295,
                        },
                        strictBounds: true,
                    },
                }}
                onLoad={(map) => setMap(map)}
            >
                <Marker position={currentPosition} />
                {
                    directionsResponse &&
                    <DirectionsRenderer directions={directionsResponse} />
                }
            </GoogleMap>
        </>
    )
}