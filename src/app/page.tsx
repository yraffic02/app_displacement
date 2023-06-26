'use client'
import { GoogleMaps } from "@/components/GoogleMap/googleMap";
import NestedModal from "@/components/Modal/ModalLogin";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center">
      <GoogleMaps />
      <NestedModal />
    </main>
  )
}
