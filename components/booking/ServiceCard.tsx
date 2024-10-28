'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Clock, PoundSterling } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    duration: string
    price: number
  }
  isSelected: boolean
  isLocationSelected: boolean
  onSelect: () => void
  onBook: () => void
}

export default function ServiceCard({ 
  service, 
  isSelected, 
  isLocationSelected, 
  onSelect, 
  onBook 
}: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-primary" />
          <span>{service.title}</span>
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {service.duration}
          </div>
          <div className="flex items-center font-medium text-foreground">
            <PoundSterling className="h-4 w-4 mr-1" />
            {service.price}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          disabled={!isLocationSelected}
          onClick={(e) => {
            e.stopPropagation()
            onBook()
          }}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  )
}