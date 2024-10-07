import React from 'react'

import OrderHistory from '../Components/UserAccount/OrderHistory'
import SavedItems from '../Components/UserAccount/SavedItems'
import ProfileManagement from '../Components/UserAccount/Profile'

export const UserAccountPage = () => {
  return (
    <div>
      <OrderHistory />
      <SavedItems />
      <ProfileManagement />
    </div>

  )
}

export default UserAccountPage