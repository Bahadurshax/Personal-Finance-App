import { useState } from "react"
import Button from "../../../components/Button/Button"
import { useFinanceData } from "../../../context/FinanceContext"

export default function NewPotForm({ onSubmit }) {
  const { setData } = useFinanceData()
  const [newPot, setNewPot] = useState({
    name: '',
    target: 0,
    total: 0
  })

  const addPotHandler = (e) => {
    e.preventDefault()
    
    setData(prev => ({ ...prev, pots: prev.pots.concat(newPot) }))
    setNewPot({ name: '', target: 0, total: 0 })
    onSubmit()
  }
  
  return (
    <form onSubmit={addPotHandler}>
      <label htmlFor="potname">Pot name</label>
        <input
          id="potname"
          type="text"
          className="input"
          required
          value={newPot.name}
          onChange={e => setNewPot(prev => ({ ...prev, name: e.target.value }))}
        />
        
        <label htmlFor="target-amount">Target amount</label>
        <input
          id="target-amount"
          type="number"
          className="input"
          required={true}
          min={1}
          value={newPot.target}
          onChange={e => setNewPot(prev => ({ ...prev, target: e.target.value ? Number(e.target.value) : '' }))}
      />
      <Button style={{ width: '100%', marginTop: '1rem' }} inputType='submit'>Add</Button>
    </form>
  )
}