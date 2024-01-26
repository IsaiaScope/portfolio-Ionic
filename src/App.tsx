import { IonApp, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PWA from './pwa/pwa-provider';
import MainOutlet from './routes/main-outlet';

// https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen

setupIonicReact({
  // swipeBackEnabled: false,
	rippleEffect: false,
	// mode: 'md'
});


const App: React.FC = () => (
	<IonApp>
		<MainOutlet />
	</IonApp>
);

export default App;
