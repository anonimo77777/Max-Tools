outlets = 2;

let myDict = new Dict("data_dict");
let classBoundaries = [0, 500, 1000, 1500, 2000, 3000, 4000, 5000, 10000, 20000, 30000];
let feature = 0;

	
function bang() {
    let keys = myDict.getkeys();
    let durations = [];
    let classCounter = Array(classBoundaries.length - 1).fill(0);
    
    
    for (let i = 0; i < keys.length; i++) {
       let tempKey = keys[i]
       let tempVal = Math.round(myDict.get(tempKey)[feature]);   
       durations.push(tempVal);  
         
       for (let j = 0; j < classBoundaries.length - 1; j++) {
           if ((tempVal > classBoundaries[j]) && (tempVal <= classBoundaries[j + 1])) {
                classCounter[j]++;
           }
       }
    }
	outlet(1, durations);
    outlet(0, classCounter);

}

function setClassBounbdaries(...n) {
    classBoundaries = n;
    post('New class boundaries values are: ', classBoundaries, '\n');
}

function setFeature(n) {
    feature = n;
}