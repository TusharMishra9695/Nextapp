import React,{SyntheticEvent, useState} from 'react'
import { TextField ,Checkbox, Button} from '@material-ui/core'
import Link from 'next/link'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Login()
{
  const router = useRouter()
  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: true ,
        password:true,
      }),
    }).then((res) => {
      // Do a fast client-side transition to the already prefetched afterlogin page
      if (res.ok) router.push('/afterlogin')
    })
  }, [])

  useEffect(() => {
    // Prefetch the afterlogin page
    router.prefetch('/')
  }, [])
    const [username,setUsername]=useState('')
   const [password,setPassword]=useState('')
 
    return(<div>
       <center>
           <form  onSubmit={handleSubmit}>
     <div className="box1" >
         <div style={{paddingTop:"40px"}}>
         <h1 >Log in</h1>
         </div>
         <div style={{paddingLeft:"20px"}} >
             <h3 align="left" >Username</h3>
           <div align="left"> <TextField  variant="outlined" label="Enter Username" style={{width:"100%",maxWidth:"350px"}}   
  onChange={(e)=>setUsername(e.target.value)} value={username} type="text " name="username"/></div>
         </div>
         <div style={{paddingLeft:"20px"}} >
             <h3 align="left" >Password</h3>
           <div align="left"> <TextField type="password" variant="outlined" label="Enter Password" style={{width:"100%",maxWidth:"350px"}} onChange={(e)=>setPassword(e.target.value)} value={password} name="password"/></div>
         </div>
         <div align="left" style={{paddingLeft:"10px",paddingTop:"10px"}}>
            
          <Checkbox     color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}  />   <span >Remember password</span><span style={{float:"right",paddingRight:"25px",paddingTop:"7px"}}>Forgot Password ?</span>
         </div>
         <div>
          
      <Button variant="contained" color="primary" style={{width:"100%",maxWidth:"350px",height:"40px",marginTop:"10px"}} type="submit" >Submit</Button>
            
         </div> 
  
     <div align="left" style={{paddingLeft:"20px",paddingTop:"15px"}}>
       <span  >Privacy Policy</span>
       <span style={{float:"right",paddingRight:"25px"}}>Terms & Condition</span>
     </div>
     </div>
     </form>
     </center> 
    </div>)
}