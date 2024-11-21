import React from 'react'

import MySlide from '../../components/Carasoulse/MySlide'
import Category from '../../components/Category/Category'
import ProductList from '../../components/Products/ProductList'
import Layouts from '../../components/Layout/Layouts'

const LandingPage = () => {
  return (
    <Layouts>
      <MySlide />
      <Category />
      <hr/>
      <ProductList />
    </Layouts>
  )
}

export default LandingPage
