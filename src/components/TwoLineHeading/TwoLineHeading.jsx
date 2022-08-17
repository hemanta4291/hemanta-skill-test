import React from 'react'
import './TwoLineHeading.scss'

const TwoLineHeading = ({title='',subTitle=''}) => {
  return (
        <h4 className='twoline__title'>
          <span className={`twoline__title--sub ${subTitle === '' ? 'twoline__title--subTitleEmpty' : ''}`}>{subTitle}</span>
          {title}        
        </h4>
  )
}

export default TwoLineHeading