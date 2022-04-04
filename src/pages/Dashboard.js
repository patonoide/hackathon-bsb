import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'
import {getTransactions} from "../repository/transaction_repository";
import {getAuth} from "firebase/auth";

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [transactions, setTransactions] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() =>
  {
    const auth = getAuth()

    const fetchData = async ()=> {
      let newTransactions = await getTransactions(auth.currentUser.uid)
      console.log(newTransactions)
      setTransactions(newTransactions )
      console.log(transactions)
    }

    fetchData()

  }
,
  [page]
)

  return (
      <>
        <PageTitle>Dashboard</PageTitle>


        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Data e Hora</TableCell>
                <TableCell>Status</TableCell>

              </tr>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, i) => {
                return (<TableRow key={i}>
                  <TableCell>
                    <span className="text-sm">{(transaction.date.toDate()).toISOString()}</span>
                  </TableCell>
                  <TableCell>
                    <span>{'Pendente'}</span>
                  </TableCell>

                </TableRow>)
              })}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                label="Table navigation"
                onChange={onPageChange}
            />
          </TableFooter>
        </TableContainer>

      </>
  )
}

export default Dashboard
