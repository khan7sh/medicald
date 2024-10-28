import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative hero-gradient py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Medical examination background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold gradient-text sm:text-6xl md:text-7xl mb-6">
            Medical D4 Assessments
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-foreground/90 sm:text-2xl md:mt-5 md:max-w-3xl font-medium">
            We provide the cheapest medical assessments, eye test included, for drivers nationwide.
          </p>
          <div className="mt-8 max-w-2xl mx-auto text-lg text-foreground/80">
            <p className="font-medium">Trusted by thousands of drivers and companies across the UK.</p>
            <p className="mt-2 font-medium">Fast, reliable, and DVLA-approved assessments.</p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 shadow-xl ring-1 ring-primary/10">
              <span className="text-5xl font-bold gradient-text">£50</span>
              <span className="ml-3 text-xl text-foreground/90 font-medium">VAT & Eye Test Included</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                <Link href="/book" className="flex items-center">
                  Book Your Medical
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30">
                <Link href="#services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}