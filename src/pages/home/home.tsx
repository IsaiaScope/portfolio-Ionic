import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonMenu,
	IonMenuButton,
	IonMenuToggle,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import InstallPWA from '../../pwa/components/InstallPWA/InstallPWA';
import PageOutlet from '../page-outlet/page-outlet';

const Home: React.FC = () => {
	return (
		<PageOutlet>
			<InstallPWA />
		</PageOutlet>
	);
};

export default Home;
