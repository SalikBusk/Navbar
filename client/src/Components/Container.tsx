import React from 'react'

interface ContainerProps {
    children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <section className='max-w-[1200px] m-auto px-13'>
        {children}
    </section>
  )
}

export default Container