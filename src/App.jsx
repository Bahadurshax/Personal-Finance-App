import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import OverviewPage from './pages/Overview/OverviewPage'
import TransactionsPage from './pages/Transactions/TransactionsPage'
import BudgetsPage from './pages/Budgets/BudgetsPage'
import PotsPage from './pages/Pots/PotsPage'
import BillsPage from './pages/Bills/BillsPage'
import './App.css'

function App() {
  const [page, setPage] = useState('budgets')

  const content = {
    overview: <OverviewPage/>,
    transactions: <TransactionsPage />,
    budgets: <BudgetsPage />,
    pots: <PotsPage />,
    bills: <BillsPage/>
  }

  return (
    <div className='container'>
      <Sidebar />
      <main>
        { content[page] }
      </main>
    </div>
  )
}

export default App
