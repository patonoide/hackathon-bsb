import React, {useContext, useState} from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea, Button } from '@windmill/react-ui'

import { MailIcon } from '../icons'
import QRCode from "react-qr-code";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../provider";
import {createTransaction} from '../repository/transaction_repository'
import User from "../models/user";
import {getAuth} from "firebase/auth";

function Forms() {

  const [code, setCode] = useState(new Date().toString())
    const auth = useContext(AuthContext)
    const history = useHistory()



  async function onButtonPress(){
      const auth = getAuth();

      // console.log(auth.user)
      // let user = User.fromJson(JSON.parse(auth.user))



      await createTransaction(auth.currentUser.uid, new Date(), 'PENDING')
      history.push('/app/dashboard')
  }

  return (
    <>
      <PageTitle>Adicionar</PageTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">

        <div className='m-4'>
          <QRCode value={code} />
        </div>



        <Button onClick={()=>onButtonPress()}>
         Adicionar item
        </Button>

      </div>
    </>
  )
}

export default Forms
