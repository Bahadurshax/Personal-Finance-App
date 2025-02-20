import { useState } from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import List from '../../components/List/List'
import Label from '../../components/Label/Label'
import Modal from '../../components/Modal/Modal'
import { useFinanceData } from '../../context/FinanceContext'
import { PieChart, Pie, Legend, Cell } from 'recharts'
import './BudgetsPage.css'

export default function BudgetsPage() {
  const { data } = useFinanceData()
  const [showModal, setShowModal] = useState(false)

  const addBudgetHandler = event => {
    console.log('Add btn')
  }

  return (
    <div
      id='budgets'
      role='tabpanel'
      aria-labelledby='tab-3'
      tabIndex='0'
    >
      <div className="d-flex">
        <h2 className="section-title">Budgets</h2>
        <Button onClick={() => setShowModal(true)} type='primary'>Add New Budget</Button>
      </div>

      <div id='budgets-container'>
        <Card title='Pie chart'>
          <PieChart width={400} height={300}>
            <Pie
              data={data.budgets}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="maximum"
              nameKey='category'
              label
            >
              {data.budgets.map((budget, index) => (
                <Cell key={`cell-${index}`} fill={budget.theme} />
              ))}
            </Pie>
            <Legend verticalAlign='top' layout='vetical'/>
          </PieChart>
        </Card>

        <div id="cards">
          {data.budgets.map((budget) => (
              <Card key={budget.category} title={budget.category}>
                <List
                  title='Recent Spendings'
                  data={data.transactions.filter(transaction => transaction.category === budget.category)}
                  render={(item, index) => (
                    <li key={index} className='d-flex'>
                      {item.name}
                      <div>
                        <Label text={'$' + item.amount} type='primary'/>
                        <Label text={new Date(item.date).toLocaleDateString()} type='secondary'/>
                      </div>
                    </li>
                  )}
                />
              </Card>
          ))}
        </div>
      </div>

      <Modal open={showModal}  width={500} title='New Budget' onClose={() => setShowModal(false)}>
        <input className='input' type="text" name='category' placeholder='Category' />
        <input className='input' type="text" inputMode='numeric' placeholder='Amount' />
        <Button onClick={addBudgetHandler} style={{width: '100%', marginTop: '1rem'}}>Add</Button>
      </Modal>
    </div>
  )
}