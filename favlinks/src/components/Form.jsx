
import { useState } from "react"
function Form(props){

const [name, setName] = useState("")
const [URL, setURL] = useState("")

let handleSubmit = (event) => {
    event.preventDefault()
    //alert('submitted from arrow function!')

 if(name=== "" || URL ==="") {
    alert("Name and URL are required!")
}
 else {
    console.log(name, URL)
    props.onNewSubmit({name, URL})
    setName("")
    setURL("") 

 }
}


let handleNameChange = (event) => {
    //console.log(event.target.value)
    setName(event.target.value)
}

   let handleURLChange = (event) => {
      //console.log(event.target.value)
    setURL(event.target.value)
   }

    return(
  
  <form onSubmit={handleSubmit}>
        <label for="linkName">Link Name</label>
        <input type="text" name="linkName" onChange={handleNameChange}/>
  <br/>
         <label for ="linkURL"> Link URL</label>
         <input type="text" name ="linkURL" onChange={handleURLChange}/>
  
         <br/>
         <br/>
         <input type="submit" disabled={name ==="" || URL ===""}/>
       </form>
  
    )
  }
export default Form  