import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import InstallPWA from '../pwa/components/install-pwa/install-pwa';

const Home: React.FC = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Ciao Iso s Bum</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
        <InstallPWA/>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
