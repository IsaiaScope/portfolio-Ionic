import {
	cleanupOutdatedCaches,
	createHandlerBoundToURL,
	precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';


// Lib Doc
declare const self: ServiceWorkerGlobalScope;
console.log(`🧊 ~ self: `, self);

self.addEventListener('message', event => {
	if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
	console.log(`🧊 ~ SKIP_WAITINGS`, self);
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// to allow work offline
// registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')))

// Custom Part
// self.addEventListener('install', e => {
// 	console.log(`[PWA] sw install event`, e);
// 	self.skipWaiting()
// });

// self.addEventListener('activate', e => {
// 	console.log(`[PWA] sw activate event`, e);
// 	self.skipWaiting()
// });

// self.addEventListener('fetch', e => {
// 	console.log(`[PWA] sw fetch event`, e, self);   
// });

