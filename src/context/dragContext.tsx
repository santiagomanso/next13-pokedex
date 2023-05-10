import { createContext, useState } from 'react'

interface DragContextI {
  activeDrag: boolean
  setActiveDrag: (bol: boolean) => void
}

const initialContext: DragContextI = {
  activeDrag: false,
  setActiveDrag: () => console.log('Not initialized'),
}

export const DragContext = createContext<DragContextI>(initialContext)

type props = {
  children: React.ReactNode
}

export const DragContextProvider = ({ children }: props) => {
  const [activeDrag, setActiveDrag] = useState(false)

  const data: DragContextI = {
    activeDrag,
    setActiveDrag,
  }

  return <DragContext.Provider value={data}>{children}</DragContext.Provider>
}
