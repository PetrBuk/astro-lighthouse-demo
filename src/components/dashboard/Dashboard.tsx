import { useEffect, useState } from 'react'

import Todos from '../todos/Todos'
import WorkProgress from '../ui/WorkProgress'

function Dashboard() {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (document) {
      const t = localStorage.getItem('token')
      setToken(t || '')
    }
  }, [])

  if (!token.length) {
    return (
      <div className="grid place-items-center">
        <h2>
          Pro načtení obsahu dashboard stránky se musíte nejdříve{' '}
          <a href="/login">
            <span className=" text-blue-600">přihlásit</span>
          </a>{' '}
          .
        </h2>
      </div>
    )
  }

  return (
    <>
      <WorkProgress />
      <Todos />
    </>
  )
}

export default Dashboard
