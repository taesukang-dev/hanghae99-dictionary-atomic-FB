import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import AddWord from './components/AddWord'
import Dictionary from './pages/Dictionary'
import { loadWordsFB } from './redux/modules/postReducer'

function App() {
  let [view, setView] = useState(false)
  return (
    <div className="App">
      {view && <AddWord setView={setView} />}

      {view === false && (
        <Routes>
          <Route path="/" element={<Dictionary setView={setView} />} />
        </Routes>
      )}
    </div>
  )
}

export default App
