import {
	IonAccordion,
	IonAccordionGroup,
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { C_ROUTES } from '../../../routes/models/constants';
import {
	homeOutline,
	hammerOutline,
	personOutline,
	logoPwa,
	settingsOutline,
	closeOutline,
} from 'ionicons/icons';
import { SETTINGS_ROUTES, MAIN_ROUTES } from '../../../routes/models/routes';
import { LABELS } from '../../../shared/models/labels';

const IsoMainMenu: React.FC = () => {
	const { MAIN_MENU_ID } = C_ROUTES;
	const { HOME, SETTINGS } = MAIN_ROUTES;
	const { PWA, PROFILE, GENERAL } = SETTINGS_ROUTES;

	return (
		<IonMenu type='push' contentId={MAIN_MENU_ID}>
			<IonHeader className='ion-no-border'>
				<IonToolbar>
					<IonMenuToggle slot='start'>
						<IonButton
							className='ion-no-padding ion-margin-start'
							fill='outline'
							size='small'
							shape='round'>
							<IonIcon slot='icon-only' icon={closeOutline}></IonIcon>
						</IonButton>
					</IonMenuToggle>
					<IonTitle className='ion-text-capitalize'>{LABELS.MAIN_MENU}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent scrollY={false} className='ion-padding'>
				<IonList lines='full'>
					<IonItem routerDirection='forward' routerLink={`/${HOME}`} detail={false}>
						<IonIcon slot='start' icon={homeOutline}></IonIcon>
						<IonLabel className='ion-text-capitalize'>{HOME}</IonLabel>
					</IonItem>

					<IonAccordionGroup>
						<IonAccordion value='first'>
							<IonItem slot='header'>
								<IonIcon slot='start' icon={settingsOutline}></IonIcon>
								<IonLabel className='ion-text-capitalize'>{SETTINGS}</IonLabel>
							</IonItem>
							<IonItem
								detail={false}
								routerDirection='forward'
								slot='content'
								routerLink={`/${SETTINGS}/${GENERAL}`}>
								<IonIcon slot='start' icon={hammerOutline}></IonIcon>
								<IonLabel className='ion-text-capitalize'>{GENERAL}</IonLabel>
							</IonItem>
							<IonItem
								detail={false}
								routerDirection='forward'
								slot='content'
								routerLink={`/${SETTINGS}/${PROFILE}`}>
								<IonIcon slot='start' icon={personOutline}></IonIcon>
								<IonLabel className='ion-text-capitalize'>{PROFILE}</IonLabel>
							</IonItem>
							<IonItem
								detail={false}
								routerDirection='forward'
								slot='content'
								routerLink={`/${SETTINGS}/${PWA}`}>
								<IonIcon slot='start' icon={logoPwa}></IonIcon>
								<IonLabel className='ion-text-uppercase'>{PWA}</IonLabel>
							</IonItem>
						</IonAccordion>
					</IonAccordionGroup>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default IsoMainMenu;
