import React from 'react'

interface LayoutI {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutI) => {
  return (
    <main className='bg-gradient-to-br from-slate-500 to-gray-200 flex justify-center lg:items-center h-screen'>
      <section className='w-full max-w-7xl h-1/2  rounded-md shadow-2xl shadow-slate-500'>
        {children}
      </section>
    </main>
  )
}

export default Layout
