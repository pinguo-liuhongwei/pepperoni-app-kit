//ApiArtStyle.js
import * as api from './api';
const API_PATH = 'http://115.231.182.11/api/art/style';
const PAYLOAD={
	appName:'poker',
	appVersion:'1.1',
	appVersionCode:'3',
	appname:'poker',
	appversion:'1.1',
	channel:'AppStore',
	device:'iPhone6,2',
	deviceId:'8355BA83-36AE-4492-9AA1-CA9945C1BC79',
	fromChannel:'ios',
	geoinfo:'0.000000,0.000000',
	initStamp:'1471516928.000000',
	latitude:'0',
	locale:'zh-Hans',
	longitude:'0',
	mcc:'460',
	mnc:'01',
	platform:'ios',
	sig:'c18270d9c15f9a6b0ca4281008854af3',
	systemVersion:'9.3.4',
	timeZone:'Asia/Shanghai'
}
export default async function getArtStyle(){
	return api.post(API_PATH,PAYLOAD).then(function(data){
		console.log('/api/art/style',data);
          if(data.status==200){
            return data.data;
          }else{
            throw new Error("Oops! "+data.message);
          }
	});
}


