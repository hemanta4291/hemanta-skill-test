import React, { useEffect, useState } from 'react'
import TwoLineHeading from '../../components/TwoLineHeading/TwoLineHeading';

const HomeMiddle = ({data,titleName}) => {
  // const [sortData,setSortData] = useState(data.items)
  // useEffect(()=>{
  //   setSortData(item => {
  //     return [...item, ...sortData.sort((a,b)=>a .sort - b.sort)];
  // });
    
  // },[])
 
  return (
    <div className='homepage__middle'>
       <div className='homepage__middle--top'>
            <h2 className='homepage__middle--top--heading'>{titleName? titleName :''}</h2>
            <div className='homepage__middle--top--content'>
              <img className='homepage__middle--top--img' src={data[0]?.thumb}/>
              <h4 className='homepage__middle--top--title'>
                <span className='homepage__middle--top--subTitle'> ক্ষমতা বুঝল কেন্দ্রীয় ব্যাংক{data[0]?.subheadline}</span>
                {data[0]?.headline}
                
                </h4>
            </div>
            
       </div>
       <div className='middle__bottom'>
            <div className='middle__bottom--single'>
            <img className='middle__bottom--img' src={data[1]?.thumb}/>
            <TwoLineHeading title={data[1]?.headline} subTitle={data[1]?.subheadline} />
            </div>
           
            <div className='middle__bottom--single'>
            <img className='middle__bottom--img' src={data[2]?.thumb}/>
            <TwoLineHeading title={data[3]?.headline} subTitle={data[3]?.subheadline} />
            </div>
       </div>
    </div>
  )
}

export default HomeMiddle