// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	url: '//localhost/ma-dev-yuqing/mautic-github/',
	api: {
		php_url: 'https://blog-server.hunger-valley.com',//'http://weixinmp.marketin.cn/liuhengbo/ma-api/public/api',
		java_url: 'http://192.168.2.176:8000/ma'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
