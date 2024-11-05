'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingDetailsForm from '@/components/booking/BookingDetailsForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar, FileText } from 'lucide-react'
import ProgressSteps from '@/components/booking/ProgressSteps'

export default function BookingDetailsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const serviceId = searchParams.get('service')
  const serviceTitle = searchParams.get('title')
  const location = searchParams.get('location')
  const date = searchParams.get('date')
  const time = searchParams.get('time')

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProgressSteps currentStep={4} />
            <h1 className="text-4xl font-extrabold gradient-text mb-8 text-center">
              Complete Your Booking
            </h1>

            {/* Booking Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Booking Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  <span>Medical Type: {decodeURIComponent(serviceTitle || '')}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>Location: {decodeURIComponent(location || '')}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span>Date & Time: {date} {time}</span>
                </div>
              </CardContent>
            </Card>

            <BookingDetailsForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 