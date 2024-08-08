import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <header>
        <h1>Query &apos;em All 🐭⚡</h1>
      </header>
      <Outlet />
    </>
  )
}
