function cmToMeter (cm){
    var meter = cm / 100;
    return meter;

}
var cmArray = [1598, 7321, 4735]
var v1 = cmToMeter (cmArray[0]);
console.log(v1);
var v2 = cmToMeter (cmArray[1]);
console.log(v2);
var v3 = cmToMeter (cmArray[2]);
console.log(v3);