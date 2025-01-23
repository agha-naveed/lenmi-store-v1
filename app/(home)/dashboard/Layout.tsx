'use client'
import React, { Suspense } from 'react'
import Loader from '@/components/Loading'

export default function Layout(props: {
    children: React.ReactNode;
  }) {
  return (
    <div>
        <Suspense fallback={<Loader />}>
            {props.children}
        </Suspense>
    </div>
  )
}