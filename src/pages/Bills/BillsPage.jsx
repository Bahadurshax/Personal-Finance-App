import { useFinanceData } from '../../context/FinanceContext'
import Card from '../../components/Card/Card'
import List from '../../components/List/List'
import Label from '../../components/Label/Label'

export default function BillsPage() {
	const { data } = useFinanceData()

	return (
		<div
			id='bills'
			role='tabpanel'
			aria-labelledby='tab-5'
			tabIndex='0'
		>
			<div id='bills-container'>
				<Card title='Summary'>
					<p>
						Total Number of bills:
						<b>
							{data.transactions.reduce((count, obj) => {
								if (obj.category == 'Bills') {
									count += 1;
									return count;
								}
								return count;
							}, 0)}
						</b>
          </p>
          <br />
					<List
						data={data.transactions.filter(t => t.category === 'Bills')}
						render={(item, index) => (
							<li
								key={index}
								className='d-flex'
							>
								{item.name}
								<div>
									<Label
										text={'$' + item.amount}
										type='primary'
									/>
									<Label
										text={new Date(item.date).toLocaleDateString()}
										type='secondary'
									/>
								</div>
							</li>
						)}
					/>
				</Card>
			</div>
		</div>
	)
}
