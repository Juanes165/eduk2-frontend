'use client';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Header, Sidebar } from '@/components/Nav';
import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import Loading from './loading';
import ForumContainer from '@/components/Common/ForumContainer';
import ForumCard from '@/components/Cards/ForumCard';

export default function HomeLayout({ children }) {

  const [count, setCount] = useState(0);
  const [openedSidebar, setOpenedSidebar] = useState(false);
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
      <div className='flex'>
        <Sidebar openedSidebar={openedSidebar} sidebarRef={sidebarRef} />
        <div className={`w-full no-scrollbar ${openedSidebar ? 'lg:w-[calc(100vw-256px)] lg:translate-x-64' : 'lg:w-[calc(100vw-80px)] lg:translate-x-20'} h-[calc(100dvh-4rem)] transition-all duration-200`}>
          <div className='flex w-full overflow-y-scroll h-full px-5'>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <div className={`h-fit hidden md:block sticky top-8`}>
              <ForumContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const discutions = [
  {
    "title": "¿Qué quiere decir esto?",
    "tagSubject": {
      "grade": "10-2",
      "name": "Quimica",
      "id": "fdkjdf99"
    },
    "date": "Feb 19 2024 10:20:04",
    "userName": "Juan Esteban Montaño",
  },
  {
    "title": "¿Qué quiere decir esto?",
    "tagSubject": {
      "grade": "10-2",
      "name": "Quimica",
      "id": "fdkjdf99"
    },
    "date": "Feb 19 2024 10:20:04",
    "userName": "Juan Esteban Montaño",
  },
  {
    "title": "¿Qué quiere decir esto?",
    "tagSubject": {
      "grade": "10-2",
      "name": "Quimica",
      "id": "fdkjdf99"
    },
    "date": "Feb 19 2024 10:20:04",
    "userName": "Juan Esteban Montaño",
  },
  {
    "title": "¿Qué quiere decir esto?",
    "tagSubject": {
      "grade": "10-2",
      "name": "Quimica",
      "id": "fdkjdf99"
    },
    "date": "Feb 19 2024 10:20:04",
    "userName": "Juan Esteban Montaño",
  },
  {
    "title": "¿Qué quiere decir esto?",
    "tagSubject": {
      "grade": "10-2",
      "name": "Quimica",
      "id": "fdkjdf99"
    },
    "date": "Feb 19 2024 10:20:04",
    "userName": "Juan Esteban Montaño",
  }
]