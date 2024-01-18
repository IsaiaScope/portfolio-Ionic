import { IonContent, IonPage } from '@ionic/react';
import { PropsWithChildren } from 'react';
import IsoHeader from '../../components/ui/iso-header/iso-header';

type Props = {} & PropsWithChildren;

const PageOutlet: React.FC<Props> = ({ children }) => {
	return (
		<IonPage>
			<IsoHeader />
			<IonContent force-overscroll={true} fullscreen={true} className='ion-padding'>{children}</IonContent>
		</IonPage>
	);
};

export default PageOutlet;
