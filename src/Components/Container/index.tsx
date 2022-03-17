import React, { FC } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './style.scss'

interface Props {
  children?: any
}

const FullWidthContainer: FC = (props: Props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default FullWidthContainer
