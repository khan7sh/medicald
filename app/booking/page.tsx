'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, CalendarIcon, Clock, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ProgressSteps from '@/components/booking/ProgressSteps'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00'
]

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState('')

  const serviceId = searchParams.get('service')
  const serviceTitle = searchParams.get('title')
  const servicePrice = searchParams.get('price')
  const location = searchParams.get('location')

  const handleBack = () => {
    router.push(`/locations?service=${serviceId}&price=${servicePrice}&title=${serviceTitle}`)
  }

  const handleBooking = () => {
    if (date && timeSlot) {
      const formattedDate = format(date, 'dd MMMM yyyy')
      router.push(`/booking-details?service=${serviceId}&title=${encodeURIComponent(serviceTitle || '')}&price=${servicePrice}&location=${encodeURIComponent(location || '')}&date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(timeSlot)}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProgressSteps currentStep={3} />

            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold gradient-text mb-4">Book Your Appointment</h1>
              <p className="text-lg text-muted-foreground">Choose your preferred date and time</p>
            </div>

            {/* Booking Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
                <CardDescription>Review your selection before booking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">{decodeURIComponent(serviceTitle || '')}</span>
                    <span className="ml-auto font-semibold">£{servicePrice}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span>{decodeURIComponent(location || '')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                className="px-8 py-6 text-lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Location
              </Button>
              <Button
                size="lg"
                onClick={handleBooking}
                disabled={!date || !timeSlot}
                className="px-8 py-6 text-lg"
              >
                Confirm Booking
                <Clock className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 