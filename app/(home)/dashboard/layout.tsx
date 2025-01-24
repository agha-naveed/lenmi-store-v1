'use client'
import React, { Suspense } from 'react'
import Loader from '@/components/Loading'
import DashboardMenu from '@/app/components/DashboardMenu';

export default function Layout(props: {
    children: React.ReactNode;
  }) {
  return (
    <div>
        <Suspense fallback={<Loader />}>
            <DashboardMenu />
            asdas
            {props.children}
        </Suspense>
    </div>
  )
}