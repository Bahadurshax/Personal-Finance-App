import Card from '../../components/Card/Card'
import Label from '../../components/Label/Label'
import { useFinanceData } from '../../context/FinanceContext'
import './TransactionsPage.css'

export default function TransactionsPage() {
  const { data } = useFinanceData()

  return (
    <div
      id='transactions'
      role='tabpanel'
      aria-labelledby='tab-2'
      tabIndex='0'
    >
      <div className="d-flex">
        <h2 className="section-title">
          Transactions
        </h2>
        <div className="filter-group">
          <button></button>
        </div>
      </div>

      <Card style={{marginTop: '2rem'}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction, idx) => {
                return (
                  <tr key={idx}>
                    <td>{transaction.name}</td>
                    <td><Label type='primary' text={transaction.category}/></td>
                    <td>${transaction.amount}</td>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </Card>

    </div>
  )

}
