import { useState } from "react"
import { useFinanceData } from "../../context/FinanceContext"
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import NewPotForm from "./Forms/NewPotForm"
import TransactionForm from "./Forms/TransactionForm"
import "./PotsPage.css"

export default function PotsPage() {
  const { data } = useFinanceData()
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState(null)


  const closeModal = () => setShowModal(false)


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
          onClick={() => {
            setModalTitle('New Pot')
            setModalContent(<NewPotForm onSubmit={closeModal}/>)
            setShowModal(true)
          }}
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
            <div className="d-flex button-group">
              <Button
                
                onClick={() => {
                  setModalTitle(`Add to ${pot.name}`)
                  setModalContent(<TransactionForm pot={pot} operation='Add' onSubmit={closeModal}/>)
                  setShowModal(true)
                }}
              >
                Add money
              </Button>
              <Button
                
                type="secondary"
                onClick={() => {
                  setModalTitle(`Withdraw from ${pot.name}`)
                  setModalContent(<TransactionForm pot={pot} operation='Withdraw' onSubmit={closeModal}/>)
                  setShowModal(true)
                }}
              >
                Withdraw money
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Modal
        title={modalTitle}
        width={500}
        open={showModal}
        onClose={closeModal}
      >
        {modalContent}
      </Modal>
    </div>
  )
}