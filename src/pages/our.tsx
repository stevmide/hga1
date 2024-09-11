import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/academy/head'))
const DynamicTabs = dynamic(() => import('../components/academy/tabs'))

const Our: NextPageWithLayout = () => {
  return (
   <>
     <DynamicHead />
     <DynamicTabs />
   </>
    
  )
}

Our.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Our