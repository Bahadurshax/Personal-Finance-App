import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"
import { useFinanceData } from "../../context/FinanceContext"
import "./PotsPage.css"

export default function PotsPage() {
  const { data } = useFinanceData()

  console.log('Test log');
  

  return (
		<div
			id='pots'
			role='tabpanel'
			aria-labelledby='tab-4'
			tabIndex='0'
		>
			<div className='d-flex'>
				<h2 className='section-title'>Pots</h2>
				<Button
					type='primary'
				>
					Add New Pot
				</Button>
			</div>

			<div id='pots-container'>
				{data.pots.map((pot) => (
					<Card
						key={`pot-${pot.id}`}
						title={pot.name}
          >
            <div className="d-flex">
              <div className="d-flex" style={{ flexDirection: 'column', gap: '0.5em' }}><span className="txt-gray">Total saved</span> <b className="txt-size-xl">${pot.total}</b></div>
              <div className="d-flex" style={{ flexDirection: 'column', gap: '0.5em' }}><span className="txt-gray">Target of</span> <b className="txt-size-xl">${pot.target}</b></div>
            </div>

						<div
							role='meter'
							aria-valuenow={pot.total}
							aria-valuemin='0'
							aria-valuemax={pot.target}
              aria-label='Total saved'
              style={{ marginBlock: '2rem' }}
						>
              <span style={{ "--fill-percentage": `${(pot.total * 100) / pot.target}%` }} className="fill">{ ((pot.total * 100) / pot.target).toFixed(0)}%</span>
            </div>
            <div className="d-flex" style={{gap: '1rem'}}>
              <Button style={{width: '100%'}}>Add money</Button>
              <Button style={{width: '100%'}} type="secondary">Withdraw money</Button>
            </div>
					</Card>
				))}
			</div>
		</div>
	)
}