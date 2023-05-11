import type { AppProps } from 'next/app'

//import for tailwind
import '../styles/globals.css'

//imports for fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

//imports for component
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

//imports for Context-API
import { SearchContextProvider } from '@/context/SearchContext'
import { DragContextProvider } from '@/context/dragContext'

//imports from react-drag-n-drop
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

library.add(fas)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <SearchContextProvider>
          <DragContextProvider>
            <Navbar />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </DragContextProvider>
        </SearchContextProvider>
      </DndProvider>
    </>
  )
}
