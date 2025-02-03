'use client'
import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '@/lib/firebase/firebase'

const db = getDatabase(app)

export default function page() {

    const putData = () => {
        set(ref(db, 'users/myData'), {
            id: 1,
            name: "naveed",
            age: 21
        })
    }

    return (
        <div>
            <label htmlFor="">Hello from Naveed</label>
            <br />
            <button onClick={() => putData()} className='bg-slate-800 text-white px-3 py-2'>Click Me!</button>
        </div>
    )
}
