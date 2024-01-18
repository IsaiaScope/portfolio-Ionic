import { useState, useEffect } from 'react';
import { useIsIOSDevice } from '../../../shared/hooks/user-agent';

/**
 * The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler
 * before a user is prompted to "install" a web site to a home screen on mobile.
 *
 * Only supported on Chrome and Android Webview.
 */
interface BeforeInstallPromptEvent extends Event {
	/**
	 * Returns an array of DOMString items containing the platforms on which the event was dispatched.
	 * This is provided for user agents that want to present a choice of versions to the user such as,
	 * for example, "web" or "play" which would allow the user to chose between a web version or
	 * an Android version.
	 */
	readonly platforms: Array<string>;

	/**
	 * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
	 */
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	/**
	 * Allows a developer to show the install prompt at a time of their own choosing.
	 *
	 * Show a prompt asking the user if they want to install the app.
	 * This method returns a Promise that resolves to an object
	 * describing the user's choice when they were prompted to install the app.
	 */
	prompt(): Promise<void>;
}

const InstallPWA: React.FC = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] =
		useState<BeforeInstallPromptEvent | null>(null);
	const isIOSDevice = useIsIOSDevice();

	useEffect(() => {
		const handler = (e: BeforeInstallPromptEvent) => {
			e.preventDefault();
			// NOTE In Safari and Chrome Mobile is false
			setSupportsPWA(true);
			setPromptInstall(e);
		};

		window.addEventListener<any>('beforeinstallprompt', handler);

		return () => window.removeEventListener<any>('beforeinstallprompt', handler);
	}, []);

	useEffect(() => {
		window.addEventListener("appinstalled", () => {
			console.log("Thank you for installing our app!");
			console.log(`🧊 ~ log: `, window.matchMedia('(display-mode: standalone)').matches);
		});

		return () => window.removeEventListener<any>('appinstalled', () => {});
	}, []);

	// const check = async () => {

	// 		if("getInstalledRelatedApps" in navigator) {
	// 			// @ts-ignore
	// 			const result = await navigator.getInstalledRelatedApps();
	// 			console.log(`🧊 ~ result: `, result);
	// 	 }

	// }



	// check()

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!promptInstall) {
			return;
		}
		promptInstall.prompt();
	};

	if (supportsPWA) {
		return (
			<button
				style={{ padding: '30px' }}
				onClick={onClick}>{`supported: ${supportsPWA}`}</button>
		);
	}

	if (isIOSDevice) {
		return <button style={{ padding: '30px' }}>{`add to home screen`}</button>;
	}

	return (
		<button
			style={{
				padding: '30px',
			}}>{`pwa not supported try on chrome or safari`}</button>
	);
};

export default InstallPWA;
