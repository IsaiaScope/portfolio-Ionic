import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Home from '../pages/home/home';
import NotFound from '../pages/NotFound/NotFound';
import { MAIN_ROUTES, SETTINGS_ROUTES } from './models/routes';
import IsoMainMenu from '../components/ui/iso-main-menu/iso-main-menu';
import Profile from '../pages/profile/profile';
import Settings from '../pages/settings/settings';
import SettingPWA from '../pwa/pages/setting-pwa/setting-pwa';
import { C_ROUTES } from './models/constants';

const MainOutlet: React.FC = () => {
	const { HOME, SETTINGS } = MAIN_ROUTES;
	const { PWA, PROFILE, GENERAL } = SETTINGS_ROUTES;
	const { MAIN_MENU_ID } = C_ROUTES;

	return (
		<IonReactRouter>
			{/* <IonSplitPane contentId={MAIN_MENU_ID}> */}
				<IsoMainMenu />
				<IonRouterOutlet id={MAIN_MENU_ID}>
					<Route path={`/${HOME}`} component={Home} exact={true} />
					<Redirect exact={true} from='/' to={`/${HOME}`} />
					<Route path={`/${SETTINGS}/${GENERAL}`} exact={true} component={Settings} />
					<Route path={`/${SETTINGS}/${PWA}`} exact={true} component={SettingPWA} />
					<Route path={`/${SETTINGS}/${PROFILE}`} exact={true} component={Profile} />
					<Route component={NotFound} />
				</IonRouterOutlet>
			{/* </IonSplitPane> */}
		</IonReactRouter>
	);
};

export default MainOutlet;
