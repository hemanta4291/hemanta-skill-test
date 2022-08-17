import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import HistoryContent from './HistoryContent';

const HomeLeft = ({data}) => {
  const history = useNavigate();
  const LATEST = 0;
  const MOSTREAD = 1;
  const DISCUSSED = 2;
  const [tabActiveId,setTabActiveId] = useState(0)
  const [dataArray,setDataArray] = useState([
    {
      id:LATEST,
      ...data.latest
    },
    {
      id:MOSTREAD,
      ...data.mostread
    },
    {
      id:DISCUSSED,
      ...data.discussed 
    }
  ])  
  
  // control tab 
  const tabHandler = (item) =>{
    setTabActiveId(item.id)
  }

  // content render by sort para meter
  const renderContentBySortParameter = () => {
    let arr = dataArray[tabActiveId].items.sort((a,b)=>a.sort - b.sort).map((item,i)=>(
      <HistoryContent item={item} key={item.id} handleDetail={()=>handleDetail(item)}/>
    ))

    return arr;
   
  }

  // details page

  const handleDetail = (item) => {
    history("/details",{state:{...item}})
    // console.log(item)
  }

  return (
    <div className='homepage__left'>
        <ul className='homepage__left--top'>
            {
              dataArray.map((item,i)=>(
                <li key={item.id} onClick={()=>tabHandler(item)} className={tabActiveId === item.id ? 'homepage__left--top__active' : ''}>
                    {item.name}
                </li>
              ))
            }
        </ul>
        <div className='history'>
            {
              renderContentBySortParameter()
            }
            
           
        </div>
    </div>
  )
}

export default HomeLeft