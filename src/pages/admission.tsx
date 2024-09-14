import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/admission/head'))
const DynamicAdmission = dynamic(() => import('../components/admission/admission'))

const Our: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHead />
      <DynamicAdmission />
    </>
  )
}

Our.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Our
