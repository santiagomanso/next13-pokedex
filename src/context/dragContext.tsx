import { createContext, useState } from 'react'

interface DragContextI {
  isDragging: boolean
  setisDragging: (bol: boolean) => void
}

const initialContext: DragContextI = {
  isDragging: false,
  setisDragging: () => console.log('Not initialized'),
}

export const DragContext = createContext<DragContextI>(initialContext)

type props = {
  children: React.ReactNode
}

export const DragContextProvider = ({ children }: props) => {
  const [isDragging, setisDragging] = useState(false)

  const data: DragContextI = {
    isDragging,
    setisDragging,
  }

  return <DragContext.Provider value={data}>{children}</DragContext.Provider>
}
