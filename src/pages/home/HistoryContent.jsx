import React from 'react'

const HistoryContent = ({item,handleDetail}) => {
  return (
        <div className='history__single'>
            <h2 className='history__single--number'>{item.sort}</h2>
            <h3 className='history__single--title' onClick={handleDetail}>
                <span className={`history__single--subTitle ${item.subheadline === '' ? 'history__single--subTitleEmpty': ''}`}>{item.subheadline}</span>
                {item.headline}</h3>
        </div>
  )
}

export default HistoryContent