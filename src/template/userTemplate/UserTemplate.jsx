import React from 'react'
import UserHeader from '../../component/UserHeader/UserHeader'
import UserFooter from '../../component/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'
const UserTemplate = () => {
  return (
    <div>

        {/* Header */}
        <UserHeader />
        {/* main */}
        <main>
            <Outlet />
        </main>
        {/* Footer */}
        <UserFooter />
    </div>
  )
}

export default UserTemplate