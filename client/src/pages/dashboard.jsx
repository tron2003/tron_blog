import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


export default function dashboard() {
   const location = useLocation()
   const [tab,setTab]= useState('')
   useEffect(()=>{

    const searchParams = new URLSearchParams(location.search)
    const tabfromurl = searchParams.get('tab')
    console.log(tabfromurl)

   },[location.search])
  
  return (
    <div className=''>
    
    </div>
  )
}
