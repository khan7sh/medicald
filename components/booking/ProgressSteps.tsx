interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep === 1 ? 'border-primary bg-primary/10 text-primary' : 'border-muted text-muted-foreground'
          }`}>
            1
          </div>
          <span className={`ml-2 font-medium ${
            currentStep === 1 ? 'text-primary' : 'text-muted-foreground'
          }`}>Choose Service</span>
        </div>
        <div className="w-16 h-0.5 bg-muted mx-4" />
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep === 2 ? 'border-primary bg-primary/10 text-primary' : 'border-muted text-muted-foreground'
          }`}>
            2
          </div>
          <span className={`ml-2 font-medium ${
            currentStep === 2 ? 'text-primary' : 'text-muted-foreground'
          }`}>Select Location</span>
        </div>
        <div className="w-16 h-0.5 bg-muted mx-4" />
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep === 3 ? 'border-primary bg-primary/10 text-primary' : 'border-muted text-muted-foreground'
          }`}>
            3
          </div>
          <span className={`ml-2 font-medium ${
            currentStep === 3 ? 'text-primary' : 'text-muted-foreground'
          }`}>Choose Time</span>
        </div>
        <div className="w-16 h-0.5 bg-muted mx-4" />
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep === 4 ? 'border-primary bg-primary/10 text-primary' : 'border-muted text-muted-foreground'
          }`}>
            4
          </div>
          <span className={`ml-2 font-medium ${
            currentStep === 4 ? 'text-primary' : 'text-muted-foreground'
          }`}>Your Details</span>
        </div>
      </div>
    </div>
  )
} 