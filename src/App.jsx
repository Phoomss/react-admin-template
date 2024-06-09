import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './Layout/Admin/AdminLayout'
import DashboardPageAdmin from './pages/Admin/DashboardPageAdmin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path='/' element={<DashboardPageAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App