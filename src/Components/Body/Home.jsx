import React from 'react'
import './Home.css'
import Table from './Table'

function Home(props) {

    

  return (
    <div className='home-container'>
        <Table data = {props.data} error={props.error} getData={props.getData}/>
    </div>
  )
}

export default Home