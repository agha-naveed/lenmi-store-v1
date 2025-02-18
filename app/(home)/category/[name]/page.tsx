'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  const param = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/category/${param.name}/api`)
      
    }
    fetchData()
  }, [])

  return (
    <div>
      
    </div>
  )
}