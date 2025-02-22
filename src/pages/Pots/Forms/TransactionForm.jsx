import { useState } from "react"
import Button from "../../../components/Button/Button"
import { useFinanceData } from "../../../context/FinanceContext"

export default function TransactionForm({ onSubmit, operation, pot: {id, total, target} }) {
  const { setData } = useFinanceData()
  const [transactionAmount, setTransactionAmount] = useState(1)
  const [errorMessage, setErrorMessage] = useState(null)

  const transactionHandler = (e) => {
    e.preventDefault()
    setErrorMessage(null)

    if ((transactionAmount + total) > target) {
      setErrorMessage('Amount must be less than the target amount')
      return
    }
    
    const updatePot = (pot) => {
      if (pot.id !== id) return pot
      return ({
        ...pot,
        total: (operation.toLowerCase() === 'add') ? pot.total + transactionAmount : pot.total - transactionAmount
      })
    }
    setData(prev => ({ ...prev, pots: prev.pots.map(updatePot) }))
    setTransactionAmount(0)
    onSubmit()
  }

  return (
    <form onSubmit={transactionHandler}>
      <label htmlFor="amount">Amount to {operation}</label>
      <input
        id="amount"
        type="number"
        className="input"
        value={transactionAmount}
        min={1}
        required={true}
        onChange={e => setTransactionAmount(e.target.value ? Number(e.target.value) : '')}
      />
      <span className="error-message">{errorMessage}</span>
      <Button inputType='submit' style={{ width: '100%', marginTop: '1rem' }}>{operation}</Button>
    </form>
  )
}