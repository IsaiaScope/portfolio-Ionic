import React, { useState } from 'react';
import { registerSW } from 'virtual:pwa-register';
import { useRegisterSW } from 'virtual:pwa-register/react';
import PWAToast from './components/pwa-toast/pwa-toast';

const PWA: React.FC = () => {
	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		// onRegisteredSW will be always called if provided from sw registration callback
		onRegisteredSW(registration) {
			console.log('[PWA] Service Worker registered with scope:', registration);
		},
		onRegisterError(error) {
			console.error('[PWA] Service Worker registration failed:', error);
		},
		// onOfflineReady will be called once the sw is registered first time:
		// the callback will be called in both client strategies.
		// onOfflineReady() {
		// 	console.log('[PWA] Service Worker onOfflineReady:');
		// },
		// onNeedRefresh will never be called since you're using auto update
		// client strategy (registerType): it will be called only
		// when using prompt client strategy and a new sw detected.
		// onNeedRefresh() {
		// 	console.log('[PWA] Service Worker onNeedRefresh:');
		// },
	});

	const close = () => {
		setOfflineReady(false);
		setNeedRefresh(false);
	};

	return (
		<>
			{offlineReady && (
				<PWAToast
					isOpenFlag={offlineReady}
					message='Application ready to be installed'
				/>
			)}
			{needRefresh && (
				<PWAToast
					isOpenFlag={needRefresh}
					cancelHandler={close}
					confirmHandler={() => updateServiceWorker(true)}
					message='A new application version is detected!'
				/>
			)}
		</>
	);
};

export default PWA;
