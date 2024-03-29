import "@/styles/globals.css"
import Header from "@/web/components/Header"
import { SessionProvider } from "@/web/components/SessionContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()
const App = ({ Component, pageProps }) => (
  <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 h-screen">
  <QueryClientProvider client={client}>
    <SessionProvider>
      <div className="flex flex-col">
        <Header />
        <section className="p-4">
          <div className="md:max-w-3xl p-4 mx-auto">
            <Component {...pageProps} />
          </div>
        </section>
      </div>
    </SessionProvider>
    </QueryClientProvider>
  </div>
)

export default App
