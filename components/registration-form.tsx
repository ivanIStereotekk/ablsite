"use client"
import { useForm,SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import TinkoffPaymentComponent from "./bank-script-component"
import { error } from "console"
import { useState } from "react"
import { text } from "stream/consumers"



interface UserFormInput {
    firstname: string
    lastname: string
    email:string
    phone: number
    password: string
    birth_date: string

  }

const phoneNumberRegexPattern =/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;;  
const dateRegexPattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
const registerURL = process.env.REGISTERAPI 
const urlAPI = 'http://127.0.0.1:8000/auth/register'

export default function ProfileForm(){
    const [apiResp,setApiResp] = useState()
    const {register,handleSubmit} = useForm<UserFormInput>();
    const onSubmit: SubmitHandler<UserFormInput> = (data) => {
      const preparedData = {
        method:'POST',
        headers:{
          'Content-type': 'application/json',
          'accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/registration',
          'Access-Control-Allow-Credentials': 'true'

        },
        body: JSON.stringify(data)
      }
      console.log(preparedData.body + " DATA")
      fetch(urlAPI,preparedData)
      .then((response) => response.body)
      .then((apiResponse) => {
        console.log(apiResponse + "Response From API:")
      })
      
      .catch((error) => {
        console.log(error + " The error from API")
      })
    }



    return<>
    <div className="flex justify-center p-10">

    <div className=" p-40 bg-slate-50">
    <p className="pb-10">Let's Register here !</p>
    <form onSubmit={handleSubmit(onSubmit)}>

    <p className="pt-5" >First Name</p>
    <Input  {...register("firstname", { required: true, maxLength: 50 })}/>


    <p className="pt-5" >Last Name</p>
      <Input  {...register("lastname", { required: true, maxLength: 50 })}/>

        <p className="pt-5" >Email</p>
      <Input type="email" {...register("email", { required: true, maxLength: 40 })}/>

      <p className="pt-5">Phone</p>
      <Input type="phone" {...register("phone", { required: true,pattern: phoneNumberRegexPattern })}/>

      <p className="pt-5">Birth Date</p>
      <Input type="date" {...register("birth_date", { pattern: dateRegexPattern })} />

      <p className="pt-5" >Password</p>
      <Input type="password" {...register("password", { required: true, maxLength: 30 })} />

      <p className="pt-5">   Approve filled data !   </p>
      <Input className="pt-2 bg-slate-600" type="submit" />
    
    </form>
    <p>{apiResp}</p>

    </div>
    

    {/* <TinkoffPaymentComponent/> */}

    </div>
    
    </>
}