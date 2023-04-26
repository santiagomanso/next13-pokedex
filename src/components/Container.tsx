import React from 'react'

interface ContainerI {
  children: React.ReactNode
}

const Container = ({ children }: ContainerI) => {
  return (
    <main className='bg-gradient-to-br from-slate-600 to-slate-700 h-screen flex justify-center  lg:items-center text-sky-500'>
      <section className='w-full max-w-3xl'>{children}</section>
    </main>
  )
}

export default Container
