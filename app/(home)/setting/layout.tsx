'use client'
import React, { Suspense } from 'react'
import Loader from '@/components/Loading'
import SettingMenu from '@/app/components/SettingMenu';

export default function Layout(props: {
    children: React.ReactNode;
  }) {
  return (
    <div className='container mx-auto flex py-8 mb-20 gap-5'>
        <Suspense fallback={<Loader />}>
            <SettingMenu />
            {props.children}
        </Suspense>
    </div>
  )
}