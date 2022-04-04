import React, {useContext, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import {createUser, loginUser} from "../repository/user_repository";
import {AuthContext} from "../provider";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const auth = useContext(AuthContext)


  async function onButtonClick() {

    const result = await loginUser(email, password)
    console.log(result)
    if(result.email === undefined) {
      setError(result)
    }else{
      await auth.signIn(result)
      history.push('/app')
    }

  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>

              <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                {error}
              </h2>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" onChange={(e)=>setEmail(e.target.value)}/>
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password" placeholder="***************" onChange={(e)=>setPassword(e.target.value)}/>
              </Label>

              <Button className="mt-4" block tag={Link} onClick={()=>onButtonClick()} >
                Log in
              </Button>

              <hr className="my-8" />


              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
