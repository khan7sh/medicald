"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">MedicalD4</span>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link href="/taxi-medicals" className="text-foreground/60 hover:text-foreground transition-colors">
            Taxi Medicals
          </Link>
          <Link href="/business-services" className="text-foreground/60 hover:text-foreground transition-colors">
            Business Services
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#faq" className="text-foreground/60 hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4 space-y-4">
              <Link href="/taxi-medicals" className="block text-foreground/60 hover:text-foreground transition-colors">
                Taxi Medicals
              </Link>
              <Link href="/business-services" className="block text-foreground/60 hover:text-foreground transition-colors">
                Business Services
              </Link>
              <Link href="/about" className="block text-foreground/60 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#faq" className="block text-foreground/60 hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Button asChild className="w-full">
                <Link href="/book">Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}