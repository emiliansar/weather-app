import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
  
const queryClient = new QueryClient()

export function Provider({children}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}