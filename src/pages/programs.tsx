import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/program/head'))
const DynamicTab = dynamic(() => import('../components/program/tabs'))
// const DynamicTabs = dynamic(() => import('../components/academy/tabs'))

const Staff: NextPageWithLayout = () => {
  return (
   <>
     <DynamicHead />
     <DynamicTab />
     
   </>
    
  )
}

Staff.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Staff