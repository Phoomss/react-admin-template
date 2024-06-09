import React from 'react'
import Footer from '../../components/layouts/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layouts/admin/Header'
import SideNav from '../../components/layouts/admin/SideNav'
const AdminLayout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <SideNav />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AdminLayout