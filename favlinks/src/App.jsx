import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import Form from './components/Form'



function App() {

const [favLinks, setFavLinks] = useState([])

 let handleNewSubmission = (data) => {
  
 setFavLinks([...favLinks, data])

 }

  return (
    <>
     <h1>Submit your fav links!</h1>
    
     <Form onNewSubmit={handleNewSubmission} />

     <Table links={favLinks}/>
    </>
  )
}

export default App