import {
	IonButtons,
	IonHeader,
	IonMenuButton,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillEnter,
	useIonViewWillLeave,
} from '@ionic/react';
import { useLocation } from 'react-router';
import { C_ROUTES } from '../../../routes/models/constants';
import { useEffect, useState } from 'react';
import { menuController } from '@ionic/core/components';

const IsoHeader: React.FC = () => {
	const { MAIN_MENU_ID } = C_ROUTES;
	const { pathname } = useLocation();

	const getTitle = () => pathname.split('/').pop();

	const [title, setTitle] = useState(getTitle());

	useIonViewDidLeave(() => {
		setTitle(getTitle());
	});

	return (
		<IonHeader translucent={true} className="ion-no-border">
			<IonToolbar >
				<IonButtons slot='end'>
					<IonMenuButton id={MAIN_MENU_ID}></IonMenuButton>
				</IonButtons>
				<IonTitle className='ion-text-capitalize'>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default IsoHeader;
