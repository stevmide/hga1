import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/resources/head'))
const DynamicResources = dynamic(() => import('../components/resources/resources'))
const DynamicTabs = dynamic(() => import('../components/resources/tabs'))

const Our: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHead />
      <DynamicResources />
      <DynamicTabs />
    </>
  )
}

Our.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Our
