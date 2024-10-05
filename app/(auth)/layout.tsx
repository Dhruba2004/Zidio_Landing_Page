import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='auth bg-gradient-to-r from-pink-500/30 to-sky-500/30 dark:bg-blue-950 flex justify-center items-center min-h-screen'>{children}</div>
  )
}

export default Layout