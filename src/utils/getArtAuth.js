//ApiArtStyle.js
import * as api from './api';
const AUTH_API_PATH = 'http://art-api.camera360.com/api/art/auth';
const AUTH_PAYLOAD = {
        appName: 'poker',
        appVersion: '1.1',
        appVersionCode: '3',
        appname: 'poker',
        appversion: '1.1',
        channel: 'AppStore',
        device: 'iPhone6,2',
        deviceId: '8355BA83-36AE-4492-9AA1-CA9945C1BC79',
        geoinfo: '0.000000,0.000000',
        initStamp: '1471516928.000000',
        latitude: '0',
        locale: 'zh-Hans',
        longitude: '0',
        mcc: '460',
        mnc: '01',
        platform: 'ios',
        sig: '266a3becf4fa846254d9795aea5e8ea9',
        systemVersion: '9.3.4',
        timeZone: 'Asia/Shanghai',
        type: 'image'
    }
    /*
    {
    	url": "http://up.qiniu.com",
    	"token": "5taQL1r-Ldksq6PxHJA68mjtuHROSIKZSwjgr76x:HjRE8NOlm930d44f5H_EjSFfvEA=:eyJzY29wZSI6ImMzNjAtYWN0aXZpdHkiLCJkZWFkbGluZSI6MTQ3MTc1MDY3NiwiZW5kVXNlciI6ImxpaGFpIiwiZXhjbHVzaXZlIjoxLCJkZXRlY3RNaW1lIjoxLCJmc2l6ZUxpbWl0IjoxMjU4MjkxMn0=",
    	"expires": 3600,
    	"ip": "172.30.249.209",
    	"req_host": "http:"
    }
    */
export default async function getArtAuth() {
    return api.post(AUTH_API_PATH, AUTH_PAYLOAD).then(function(data) {
        console.log('/api/art/auth', data, AUTH_PAYLOAD);
        if (data.status == 200) {
            return data.data;
        } else {
            throw new Error("Oops! " + data.message);
        }
    });
}
