import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy(),
		VitePWA({
			// mode: 'development',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
				sourcemap: true,
				// importScripts: ['sw.js']
				// cleanupOutdatedCaches: false, generateSW already include
			},
			devOptions: {
				enabled: true, // make pwa installable in dev
				type: 'module', // necessary for 	strategies: 'injectManifest',
				// navigateFallback: 'index.html',
				// suppressWarnings: true,
			},
			manifest: {
				prefer_related_applications: true,
				related_applications: [
					{
						platform: 'webapp',
						url: 'http://localhost:8100/manifest.webmanifest',
					},
					{
						platform: 'webapp',
						url: 'https://portfolio-riva-isaia.netlify.app/manifest.webmanifest',
					},
				],
				id: 'HomeISOnFire',
				name: 'Portfolio Riva Isaia',
				short_name: 'ISO',
				description: 'Ionic Application for Riva Isaia Portfolio',
				icons: [
					// {
					// 	'src': 'assets/icon/favicon.png',
					// 	'sizes': '64x64 32x32 24x24 16x16',
					// 	'type': 'image/x-icon',
					// },
					// {
					// 	'src': 'assets/icon/icon.png',
					// 	'type': 'image/png',
					// 	'sizes': '512x512',
					// 	'purpose': 'maskable',
					// },
					{
						'src': '/pwa/imgs/icon-48.webp',
						'type': 'image/png',
						'sizes': '48x48',
						'purpose': 'any maskable',
					},
					{
						'src': '/pwa/imgs/icon-72.webp',
						'type': 'image/png',
						'sizes': '72x72',
						'purpose': 'any maskable',
					},
					{
						'src': '/pwa/imgs/icon-96.webp',
						'type': 'image/png',
						'sizes': '96x96',
						'purpose': 'any maskable',
					},
					{
						'src': '/pwa/imgs/icon-128.webp',
						'type': 'image/png',
						'sizes': '128x128',
						'purpose': 'any maskable',
					},
					{
						'src': '/pwa/imgs/icon-192.webp',
						'type': 'image/png',
						'sizes': '192x192',
						'purpose': 'any maskable',
					},
					{
						'src': '/pwa/imgs/icon-256.webp',
						'type': 'image/png',
						'sizes': '256x256',
						'purpose': 'any maskable',
					},
					// {
					// 	'src': '/pwa/imgs/icon-512.webp',
					// 	'type': 'image/png',
					// 	'sizes': '512x512',
					// 	'purpose': 'any maskable',
					// },
				],
				start_url: '.',
				display: 'standalone',
				theme_color: '#ffffff',
				background_color: '#ffffff',
			},
			// includeAssets: ['**/*.{png,ico,png,svg,webp}'],
			injectRegister: null,
			registerType: 'prompt',

			strategies: 'injectManifest',
			outDir: 'dist',

			srcDir: 'src/pwa',
			filename: 'sw.ts',
		}),
	],
	// @ts-ignore
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},

	build: {
		sourcemap: true,
	},
});
