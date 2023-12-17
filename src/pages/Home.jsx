import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import Schemas from '../components/Schemas'
import CodeEditor from '../components/Editor'


const queryClient = new QueryClient();

const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <section className='flex lg:flex-row md:flex-row flex-col w-full'>
                <Schemas />
                <CodeEditor />
            </section>
        </QueryClientProvider>
    )
}

export default Home