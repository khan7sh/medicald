'use client'

import { useState } from 'react'
import {
  Car,
  Truck,
  Bus,
  Ambulance,
  Forklift,
  Home as HomeIcon,
  Plane,
  Horse,
  Motorcycle,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocationSelector from '@/components/booking/LocationSelector'
import ServiceCard from '@/components/booking/ServiceCard'

const services = [
  {
    id: 'hgv',
    title: 'HGV/LGV Medical',
    description: 'Your full HGV/LGV Medical including Eye Test',
    icon: Truck,
    duration: '15 min',
    price: 50
  },
  {
    id: 'taxi',
    title: 'Taxi/Private Hire & PCO & TPH/204',
    description: 'Your full Taxi D4 Medical Assessment & Eye Test',
    icon: Car,
    duration: '15 min',
    price: 50
  },
  {
    id: 'bus',
    title: 'Bus/PCV Driver Medical',
    description: 'Your full Bus/PCV Medical including Eye Test',
    icon: Bus,
    duration: '15 min',
    price: 50
  },
  {
    id: 'ambulance',
    title: 'Ambulance Driver Medical',
    description: 'Your full Ambulance Medical including Eye Test',
    icon: Ambulance,
    duration: '15 min',
    price: 50
  },
  {
    id: 'forklift',
    title: 'Fork Lift Driver Medical',
    description: 'Your full FLT Medical including Eye Test',
    icon: Forklift,
    duration: '15 min',
    price: 50
  },
  {
    id: 'motorhome',
    title: 'Motorhome Medical',
    description: 'Your full Motorhome Medical including Eye Test',
    icon: HomeIcon,
    duration: '15 min',
    price: 50
  },
  {
    id: 'airside',
    title: 'Airside Medical',
    description: 'AIRSIDE DRIVER MEDICAL ASSESSMENTS',
    icon: Plane,
    duration: '30 min',
    price: 120
  },
  {
    id: 'jockey',
    title: 'Jockey Medicals',
    description: 'Complete medical assessment for jockeys',
    icon: Horse,
    duration: '1 hr',
    price: 150
  },
  {
    id: 'racing',
    title: 'National Motor/Bike Racing Medical',
    description: 'Your full motor/bike racing Medical including Eye test',
    icon: Motorcycle,
    duration: '15 min',
    price: 80
  },
  {
    id: 'home',
    title: 'Medical in your home',
    description: 'Driver Medical for Group 2 Drivers. Doctor will be doing house visit.',
    icon: HomeIcon,
    duration: '15 min',
    price: 165
  }
]

export default function BookPage() {
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const handleBooking = () => {
    console.log('Booking:', { selectedLocation, selectedService })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold gradient-text text-center mb-16">Book Your Medical Assessment</h1>

          <div className="max-w-xl mx-auto mb-16">
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService === service.id}
                isLocationSelected={!!selectedLocation}
                onSelect={() => setSelectedService(service.id)}
                onBook={handleBooking}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}