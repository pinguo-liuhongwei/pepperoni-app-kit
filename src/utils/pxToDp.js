const Dimensions = require('Dimensions');
const pixelRatio = require('PixelRatio').get();


const deviceWidthDp = Dimensions.get('window').height;
// UI 默认给图是 750
const uiWidthPx = 1334;

function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx;
}

export default pxToDp;
