import { IonToast } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { serverOutline, close } from 'ionicons/icons';

type Props = {
	message: string
	isOpenFlag: boolean;
	confirmHandler?: () => void;
	cancelHandler?: () => void;
};

const PWAToast: React.FC<Props> = ({
	isOpenFlag,
	message,
	confirmHandler = () => {},
	cancelHandler = () => {},
}) => {
	const [isOpen, setIsOpen] = useState(isOpenFlag);

	const buttons = [
		{
			text: 'Update',
			icon: serverOutline,
			handler: confirmHandler,
		},
		{
			text: 'Dismiss',
			role:'cancel',
			icon: close,
			handler: cancelHandler,
		},
	]

	useEffect(() => {
		setIsOpen(isOpenFlag);
	}, [isOpenFlag]);

	return (
		<>
			<IonToast
				isOpen={isOpen}
				message={message}
				layout='stacked'
				position='bottom'
				icon={serverOutline}
				onDidDismiss={() => setIsOpen(false)}
				buttons={buttons}
				keyboardClose={true}
				></IonToast>
		</>
	);
};

export default PWAToast;
