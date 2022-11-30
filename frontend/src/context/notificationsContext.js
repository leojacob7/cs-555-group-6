import React, { useState, createContext, useContext } from 'react';

const NotificationsContext = createContext(false);

export const NotificationsProvider = ({ children }) => {
	const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

	console.log('>>', isNotificationEnabled);

	return (
		<NotificationsContext.Provider
			value={{ isNotificationEnabled, setIsNotificationEnabled }}
		>
			{children}
		</NotificationsContext.Provider>
	);
};

export function useNotification() {
	return useContext(NotificationsContext);
}
