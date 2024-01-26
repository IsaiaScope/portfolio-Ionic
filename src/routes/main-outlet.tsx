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
import * as CA from '@capacitor/app'





import { isPlatform } from '@ionic/react';

isPlatform('ios'); // returns true when running on a iOS device
console.log(`🧊 ~ isPlatform('ios'): `, isPlatform('ios'));
isPlatform('pwa'); // returns true when running on a iOS device
console.log(`🧊 ~ isPlatform('pwa'): `, isPlatform('pwa'));







const MainOutlet: React.FC = () => {
	const { HOME, SETTINGS } = MAIN_ROUTES;
	const { PWA, PROFILE, GENERAL } = SETTINGS_ROUTES;
	const { MAIN_MENU_ID } = C_ROUTES;










	return (
		<IonReactRouter>
			<IonSplitPane contentId={MAIN_MENU_ID}>
				<IsoMainMenu />
				<IonRouterOutlet animated={false} id={MAIN_MENU_ID}>
					<Route path={`/${HOME}`} component={Home} exact={true} />
					<Redirect exact={true} from='/' to={`/${HOME}`} />
					<Route path={`/${SETTINGS}/${GENERAL}`} exact={true} component={Settings} />
					<Route path={`/${SETTINGS}/${PWA}`} exact={true} component={SettingPWA} />
					<Route path={`/${SETTINGS}/${PROFILE}`} exact={true} component={Profile} />
					<Route component={NotFound} />
				</IonRouterOutlet>
			</IonSplitPane>
		</IonReactRouter>
	);
};

export default MainOutlet;


