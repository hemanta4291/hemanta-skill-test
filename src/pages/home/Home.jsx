import React,{useState,useEffect} from 'react'
import data from '../../data.json'
import './Home.scss'
import HomeLeft from './HomeLeft'
import HomeMiddle from './HomeMiddle'
import HomeRight from './HomeRight'

const Home = () => {
  const [dataNew,setDataNew] = useState(data)
  console.log(dataNew)

  return (
    <div className='homepage'>
        <HomeLeft data={data}/>
        <HomeRight data={data.selected}/>
    </div>
  )
}

export default Home