import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicTable = dynamic(() => import('../components/benefit/table'))
const DynamicHead = dynamic(() => import('../components/benefit/head'))
// const DynamicTabs = dynamic(() => import('../components/academy/tabs'))

const Staff: NextPageWithLayout = () => {
  return (
   <>
     <DynamicHead />
     <DynamicTable />
     
   </>
    
  )
}

Staff.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Staff