var exec = require('cordova/exec');

PLUGIN = "OpenIabCordovaPlugin";

function log(msg)
{
	console.log("OpenIAB-js: " + msg);
}

function OpenIAB()
{
}

var VERIFY_MODE =
{
	EVERYTHING:0,
	SKIP:1,
	ONLY_KNOWN:2
}

var STORE_NAME =
{
    GOOGLE:"com.google.play",
    AMAZON:"com.amazon.apps",
    SAMSUNG:"com.samsung.apps",
    YANDEX:"com.yandex.store",
    NOKIA:"com.nokia.nstore",
    APPLAND:"Appland",
    SLIDEME:"SlideME",
    APTOIDE:"cm.aptoide.pt"
}

var options = 
{
	checkInventory:false,
	discoveryTimeout:5 * 1000,
	checkInventoryTimeout:10 * 1000,
	verifyMode:VERIFY_MODE.SKIP,
	preferredStoreNames: [ STORE_NAME.GOOGLE, STORE_NAME.YANDEX ],
	availableStores:
	[
		[STORE_NAME.GOOGLE, 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm+6Tu90pvu2/pdPCI+xcAEoxExJBDYsstQHGl28FPeuGjVv/vzguk19WqLcAOHptt5ahYB4LD8PugkMXmgCoYTw0WhWz70kplkkiwVsy9mRPJPsk2F1z/y1w176kV6IwdmGKgliRzPLHp2AUo1g+8XrFVF8V9K6n0uVQqfQ5sCEYdRPO+58b5qNG5kJ7wMYCB8ByY/BCddZDM9mbBziYQIxj/u1Wn45ptHzZv/hlxjHXaqB+UJB1uJZS4fw1w80XPwH7gHWbsVJS6d9fpv2S/nwOIcHmQtQ2W7SXJRhFbdHrjtpc/LHGfrB4KEthHl2wolFXepeJUjrkM2t5PN7NIwIDAQAB']
	]
}

OpenIAB.prototype.init = function(success, error)
{
	var j = JSON.stringify(options);
	console.log(j)
	exec(success, error, PLUGIN, "init", [options]);
}

module.exports = new OpenIAB();