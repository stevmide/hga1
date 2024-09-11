import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHead = dynamic(() => import('../components/staff/head'))
// const DynamicTabs = dynamic(() => import('../components/academy/tabs'))

const Staff: NextPageWithLayout = () => {
  return (
   <>
     <DynamicHead />
     
   </>
    
  )
}

Staff.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Staff