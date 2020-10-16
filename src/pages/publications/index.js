import React from 'react'
import PageLayout from '../../components/page-layout/index.js'
import Title from '../../components/title'
import Tenders from '../../components/tenders/index'

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Tenders" />
      <Tenders />
    </PageLayout>
  )
}

export default Publications;
