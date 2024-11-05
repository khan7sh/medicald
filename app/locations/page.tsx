'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocationSelector from '@/components/booking/LocationSelector'
import ProgressSteps from '@/components/booking/ProgressSteps'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar } from 'lucide-react'

export default function LocationsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedLocation, setSelectedLocation] = useState('')

  const serviceId = searchParams.get('service')
  const serviceTitle = searchParams.get('title')
  const servicePrice = searchParams.get('price')

  const handleBack = () => {
    router.push(`/book?service=${serviceId}`)
  }

  const handleNext = () => {
    if (selectedLocation) {
      router.push(`/booking?service=${serviceId}&price=${servicePrice}&title=${serviceTitle}&location=${encodeURIComponent(selectedLocation)}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <ProgressSteps currentStep={2} />

            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold gradient-text mb-4">Choose Your Location</h1>
              <p className="text-lg text-muted-foreground">Select a convenient clinic location for your assessment</p>
            </div>

            {serviceTitle && servicePrice && (
              <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-2">Selected Service:</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg">{decodeURIComponent(serviceTitle)}</span>
                  <span className="text-primary font-semibold">£{servicePrice}</span>
                </div>
              </div>
            )}

            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                className="px-8 py-6 text-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Button>
              <Button
                size="lg"
                onClick={handleNext}
                disabled={!selectedLocation}
                className="px-8 py-6 text-lg"
              >
                Book Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 