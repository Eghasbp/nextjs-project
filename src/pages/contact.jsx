import Image from 'next/image'
import React from 'react'

import Layout from '@/components/layout'

const Contact = () => {
  return (
    <Layout>
      contact
      <button className='bg-blue-300 px-4 py-2 rounded-lg'>
        Hallo button
      </button>
      <Image src='/public/svg/vercel.svg' alt='ini adalah gambar'/>
    </Layout>
  )
}

export default Contact 