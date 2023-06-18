'use client'
import { Skeleton } from '@mui/material'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const center = {lat: 48.8584, lng: 2.2945}

export default function Home() {
  const apiKey = process.env.API_KEY_MAPS || ''

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })

  if (!isLoaded) {
    return <Skeleton
      sx={{ bgcolor: 'grey.900' }}
      variant="rectangular"
      width='100vw'
      height='100vh'
    />
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      >
        <Marker position={center}/>
      </GoogleMap>
    </main>
  )
}
