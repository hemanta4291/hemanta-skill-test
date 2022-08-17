import React from 'react'

const NewsFeed = ({item}) => {
  return (
    <div className='newsfeed'>
        <h3 className='newsfeed__title'>
          <span className={`newsfeed--subTitle`}>{item.subheadline}</span>
          {item.headline}</h3>
    </div>
  )
}

export default NewsFeed