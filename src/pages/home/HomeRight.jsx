import React,{useState,useEffect} from 'react'
import NewsFeed from '../../components/newsfeed/NewsFeed';
import TwoLineHeading from '../../components/TwoLineHeading/TwoLineHeading';
import HomeMiddle from './HomeMiddle';

const HomeRight = ({data}) => {
  const [sortData,setSortData] = useState(data.items)
  const [sortData1,setSortData1] = useState([])
  useEffect(()=>{
    setSortData(item => {
      return [...item, ...sortData.sort((a,b)=>a .sort - b.sort)];
  });
    
  },[])

  useEffect(()=>{
    setSortData1(item => {
      const removeFirstTwo = sortData.splice(0, 1)
      return [...item, ...removeFirstTwo];
  });
    
    
  },[])

  const handleDetail = (item) =>{

  }
  return (
    <div className='homepage__right'>
        <HomeMiddle data={sortData} titleName={data.name}/>
        <div className='homepage__right--top'>
          <h3 className='homepage__right--top--title'>নির্বাচিত</h3>
          <div className='homepage__right--top--add'>
             AD-1
          </div>

          <div className='side__news'>
            {
              sortData1.map((item,i)=>(
                <div className='side__news--single'>
                   <div className='side__news--single__left'>
                   <TwoLineHeading title={item.headline} subTitle={item?.subheadline} />
                   </div>
                   <div className='side__news--single__right'><img src={item.thumb} /></div>
                </div>
              ))
            }
            
            {
              // console.log(sortData)
              // sortData.map((item,i)=>(
              //   <NewsFeed item={item} key={item.id} handleDetail={()=>handleDetail(item)}/>
              // ))
              
            }
              
          </div>
        </div>
    </div>
  )
}

export default HomeRight