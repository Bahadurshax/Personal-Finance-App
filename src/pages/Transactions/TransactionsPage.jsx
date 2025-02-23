import { useState, useMemo } from 'react'
import Card from '../../components/Card/Card'
import Label from '../../components/Label/Label'
import { useFinanceData } from '../../context/FinanceContext'
import './TransactionsPage.css'

export default function TransactionsPage() {
  const { data } = useFinanceData()
  const categories = Array.from(new Set(data.transactions.map(t => t.category)))
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filteredData = useMemo(() =>
    data.transactions
      .filter(t => {
        const categoryMatch = t.category === selectedCategory || selectedCategory === 'all'
        const queryMatch = query ? t.name.toLowerCase().includes(query.toLocaleLowerCase()) : true
        return categoryMatch && queryMatch
      })
      .map(t => ({ ...t, date: new Date(t.date).toLocaleDateString() })),
    [data.transactions, selectedCategory, query]
  )

  return (
    <div
      id='transactions'
      role='tabpanel'
      aria-labelledby='tab-2'
      tabIndex='0'
    >
      <div style={{flexWrap: 'wrap', gap: '1rem'}} className="sticky d-flex">
        <h2 className="section-title">
          Transactions
        </h2>
        <div className="filter-group d-flex">
          <input type="search" name="query" placeholder='Search...' onChange={e => setQuery(e.target.value)}/>
          <select
            name="category"
            defaultValue='all'
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value='all'>all</option>
            {categories.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
          </select>
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

            {filteredData.map((transaction, idx) => {
                return (
                  <tr key={idx}>
                    <td data-cell='Name'>{transaction.name}</td>
                    <td data-cell='Category'><Label type='primary' text={transaction.category}/></td>
                    <td data-cell='Amount'>${transaction.amount}</td>
                    <td data-cell='Date'>{transaction.date}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </Card>

    </div>
  )

}
