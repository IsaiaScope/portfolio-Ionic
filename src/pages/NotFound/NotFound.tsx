import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InstallPWA from '../../pwa/components/InstallPWA/InstallPWA';
import IsoHeader from '../../components/ui/iso-header/iso-header';

const NotFound: React.FC = () => {

	return (
		<IonPage>
			<IsoHeader></IsoHeader>
      <IonContent fullscreen>Not Found</IonContent>
		</IonPage>
	);
};

export default NotFound;
