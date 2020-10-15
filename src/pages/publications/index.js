import React from 'react'
import PageLayout from '../../components/page-layout/index.js'
import Title from '../../components/title'
import Tender from '../../components/tender/index'

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Tenders" />
      <Tender />
    </PageLayout>
  )
}

export default Publications;
