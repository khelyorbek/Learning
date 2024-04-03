// JS
var small = 1;
var medium = 2;
var large = 3;
// TS
// PascalCase
// by default Small = 0, Medium = 1, Large = 2
var SizeDefault;
(function (SizeDefault) {
    SizeDefault[SizeDefault["Small"] = 0] = "Small";
    SizeDefault[SizeDefault["Medium"] = 1] = "Medium";
    SizeDefault[SizeDefault["Large"] = 2] = "Large";
})(SizeDefault || (SizeDefault = {}));
// You can set values manually but you have to set it for ALL items inside {}
var SizeManuallySet;
(function (SizeManuallySet) {
    SizeManuallySet[SizeManuallySet["Small"] = 1] = "Small";
    SizeManuallySet[SizeManuallySet["Medium"] = 2] = "Medium";
    SizeManuallySet[SizeManuallySet["Large"] = 3] = "Large";
})(SizeManuallySet || (SizeManuallySet = {}));
// OR 
// You can set the first value manually and the rest will increment
var SizeIncremented;
(function (SizeIncremented) {
    SizeIncremented[SizeIncremented["Small"] = 1] = "Small";
    SizeIncremented[SizeIncremented["Medium"] = 2] = "Medium";
    SizeIncremented[SizeIncremented["Large"] = 3] = "Large";
})(SizeIncremented || (SizeIncremented = {}));
var mySize = SizeDefault.Medium;
console.log(mySize); // run tsc, then run node index.js
// ^ this will return 1 because Medium is auto set to 1 by TS
