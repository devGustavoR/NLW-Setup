import './styles/global.css'

import { Habit } from "./components/Habits"

function App() {

  return (
    <>    
    <Habit completed={3} />
    <Habit completed={10} />
    <Habit completed={20} />
    <Habit completed={32} />
    </>

  )
}

export default App
