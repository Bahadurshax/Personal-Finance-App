import Card from '../../components/Card/Card'
import { useFinanceData } from '../../context/FinanceContext'
import './OverviewPage.css'

export default function OverviewPage() {
  const { data } = useFinanceData()
  
  return (
    <div id='overview' role='tabpanel' aria-labelledby='tab-1' tabIndex='0'>
      <h2 className='section-title'>Overview</h2>
      <div className="wrapper">
        <Card id='balance' title='Current Balance' type='dark'>
          <p className='txt-size-xl'><strong>{data.balance.current}</strong></p>
        </Card>
        <Card id='income' title='Income'>
          <p className='txt-size-xl'><strong>$42,00</strong></p>
        </Card>
        <Card id='expenses' title='Expenses'>
          <p className='txt-size-xl'><strong>$42,00</strong></p>
        </Card>
        <Card id='pots' title='Pots'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perferendis.</p>
        </Card>
        <Card id='budget' title='Budgets'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, hic.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, hic.</p>
        </Card>
        <Card id='transactions' title='Transactions'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam.</p>
        </Card>
        <Card id='bills' title='Recurring Bills'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam.</p>
        </Card>
      </div>
    </div>
  )
}