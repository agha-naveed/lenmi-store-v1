'use client'
import React, { Suspense } from 'react'
import Loader from '@/components/Loading'
import DashboardMenu from '@/app/components/DashboardMenu';

export default function Layout(props: {
    children: React.ReactNode;
  }) {
  return (
    <div className='container mx-auto flex py-5 gap-5'>
        <Suspense fallback={<Loader />}>
            <DashboardMenu />
            {props.children}
        </Suspense>
    </div>
  )
}