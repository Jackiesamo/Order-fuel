import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Order Fuel</h1>
        <p className="text-xl text-muted-foreground mb-8">Fuel delivery at your doorstep</p>
        <button 
          onClick={() => navigate('/login')}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Index
