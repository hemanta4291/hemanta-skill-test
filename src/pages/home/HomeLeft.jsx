import React,{useState} from 'react'

const HomeLeft = ({data}) => {
  const [tabActiveId,setTabActiveId] = useState(0)
  const LATEST = 0;
  const MOSTREAD = 1;
  const DISCUSSED = 2;


  const tabArray = [
      {
        id:LATEST,
        name:'সর্বশেষ'
      },
      {
        id:MOSTREAD,
        name:'পঠিত'
      },
      {
        id:DISCUSSED,
        name:'আলোচিত'
      }
  ]

  // control tab 
  const tabHandler = (item) =>{
    setTabActiveId(item.id)
  }

  return (
    <div className='homepage__left'>
        <ul className='homepage__left--top'>
            {
              tabArray.map((item,i)=>(
                <li key={item.id} onClick={()=>tabHandler(item)} className={tabActiveId === item.id ? 'homepage__left--top__active' : ''}>
                    {item.name}
                </li>
              ))
            }
        </ul>
        <div className='homepage__left--content'>
            <div className='homepage__left--content__single'>
                <h2 className='content__single'>১</h2>
                <h3>
                  <span>আরেকজনের সন্ধান মেলেনি</span>
                  বঙ্গোপসাগরে নিখোঁজ এক জেলের লাশ উদ্ধার, আরেকজনের সন্ধান মেলেনি</h3>
            </div>
        </div>
    </div>
  )
}

export default HomeLeft