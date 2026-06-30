import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Index from './pages/Index'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  )
}