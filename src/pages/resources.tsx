import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/resources/head'))
const DynamicResources = dynamic(() => import('../components/resources/resources'))

const Our: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHead />
      <DynamicResources />
    </>
  )
}

Our.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Our
