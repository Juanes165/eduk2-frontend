'use client';
import { useState, useEffect, useRef } from 'react';
import { Header, Sidebar } from '@/components/Nav';
import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

export default function HomeLayout({ children }) {

  const [count, setCount] = useState(0);
  const [openedSidebar, setOpenedSidebar] = useState(!false);
  const toggleSidebar = () => setOpenedSidebar(!openedSidebar);

  const { isLogged } = useAuth();

  const sidebarRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      //setOpenedSidebar(false);
    }
  }

  if (!isLogged) {
    return redirect('/access');
  }

  return (
    <section className='max-h-screen overflow-hidden'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header toggleSidebar={toggleSidebar} />
      <div className='flex flex-row'>
        <Sidebar openedSidebar={openedSidebar} sidebarRef={sidebarRef} />
        <div className='grow overflow-y-scroll w-full overflow-x-hidden h-[calc(100vh-4rem)]'>
          {children}  
        </div>
      </div>
    </section>
  )
}
