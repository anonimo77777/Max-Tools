outlets = 2;

const featuresList = [
        "1-Centroid\n",
        "2-Rolloff\n",
        "3-Crest\n",
        "4-Loudness range\n",
        "5-Amplitude\n",
        "6-Spectral tilt\n",
        "7-Spectral Flux\n",
        "8-Harmonic-to-Noise ratio\n",
        "9-Pitch Salience\n",
        "10-MFCC_5\n",
        "11-Duration (ms)\n"  
];


function features_array(...n) {
    let resultingFeaturesArray = [];
    let originalFeaturesArray = Array(11);
    
    originalFeaturesArray = n;
    //post(originalFeaturesArray);
    
    for (let i = 0; i < originalFeaturesArray.length; i++ ) {
        if (originalFeaturesArray[i] === 1) {
            resultingFeaturesArray.push(featuresList[i]);
        }
    }
    outlet(0, resultingFeaturesArray);
    outlet(1, resultingFeaturesArray.length);
    
}