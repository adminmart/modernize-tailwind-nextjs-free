'use client'

import Header from './layout/header/Header'
import Topbar from './layout/header/Topbar'
import Sidebar from './layout/sidebar/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Topbar />
      <div className='flex w-full min-h-screen'>
        <div className='page-wrapper flex w-full'>
          {/* Header/sidebar */}
          <div className='xl:block hidden'>
            <Sidebar />
          </div>
          <div className='body-wrapper w-full bg-background'>
            {/* Top Header  */}
            <Header />
            {/* Body Content  */}
            <div className={`container mx-auto px-6 py-30`}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
