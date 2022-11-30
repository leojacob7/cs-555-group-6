import React from 'react'
import { useNotification } from '../context/notificationsContext'
import './styles.css'
import CloseIcon from '@mui/icons-material/Close'

function NotificationSideBar ({ open }) {
  const { isNotificationEnabled, setIsNotificationEnabled } = useNotification()
  return (
    <div
      className={
        open || isNotificationEnabled ? 'show_side_bar side_bar' : 'side_bar'
      }
    >
      {(open || isNotificationEnabled) && (
        <CloseIcon onClick={() => setIsNotificationEnabled(false)} />
      )}
      {open && 'NotificationSideBar'}
    </div>
  )
}

export default NotificationSideBar
