const thereIsSwInNavigator = () => 'serviceWorker' in navigator;
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {
  registerSW();
}

// Classic Approach
// navigator.serviceWorker
// 		.register(`/sw.js`)
// 		.then(registration =>
// 			console.log(`[PWA] sw register successfully`, registration)
// 		)
// 		.catch(e => console.log(`[PWA] sw register error`, e));


const injectRegister = () => {
	registerSW({
		onRegistered(registration) {
			console.log('Service Worker registered with scope:', registration);
		},
		onRegisterError(error) {
			console.error('Service Worker registration failed:', error);
		},
	});
};

const init = () => {
	if (thereIsSwInNavigator()) {
		injectRegister();
	}
	console.log('[PWA] init');
};

document.addEventListener('DOMContentLoaded', () => init());
