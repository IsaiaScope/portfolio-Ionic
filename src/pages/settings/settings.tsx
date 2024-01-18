import { IonList, IonItem, IonSelect, IonSelectOption, IonIcon, IonToggle } from '@ionic/react';
import PageOutlet from '../page-outlet/page-outlet';
import {
	languageOutline,
	earthOutline,
	caretDownOutline,
	caretDownCircleOutline,
} from 'ionicons/icons';

const Settings: React.FC = () => {
	const customAlertOptions = {
		header: 'Pizza Toppings',
		// subHeader: 'Select your favorite topping',
	};


const darkModeHandler = (e: any) => {
	console.log(`🧊 ~ e: `, e);
	
}

	return (
		<PageOutlet>
			<IonList lines='full'>
				<IonItem>
					<IonIcon slot='start' icon={earthOutline}></IonIcon>
					<IonSelect
						interfaceOptions={customAlertOptions}
						label='Language'
						interface='alert'
						placeholder='Select'
						okText='Set'
						cancelText='Cancel'
						// toggleIcon={caretDownCircleOutline}
						// expanded-icon={caretDownCircleOutline}
						>
						
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
						<IonSelectOption value='apple'>Apple</IonSelectOption>
						<IonSelectOption value='banana'>Banana</IonSelectOption>
						<IonSelectOption value='orange'>Orange</IonSelectOption>
					</IonSelect>
				</IonItem>
				<IonItem>

				<IonToggle enableOnOffLabels={true} onIonChange={darkModeHandler} >Enable Notifications</IonToggle>
				</IonItem>
			</IonList>
		</PageOutlet>
	);
};

export default Settings;
