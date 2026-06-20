outlets = 2;
const featuresList = [
        "Centroid",
        "Rolloff",
        "Crest",
        "Loudness_range",
        "Amplitude",
        "Spectral_tilt",
        "Spectral_flux",
        "Harmonic-to-Noise_ratio",
        "Pitch_Salience",
        "MFCC_5",
        "Duration_(ms)"  
];
let resultingFeaturesArray = [];


function features_array(...n) {
    let originalFeaturesArray = Array(11);
    resultingFeaturesArray = [];
    
    originalFeaturesArray = n;
    
    for (let i = 0; i < originalFeaturesArray.length; i++ ) {
        if (originalFeaturesArray[i] === 1) {
            resultingFeaturesArray.push(featuresList[i]);
        }
    }
    //post(resultingFeaturesArray);
}

function msg_dictionary(thisDict) {
    
    let keys = Object.keys(thisDict);
    let samplesNumber = keys.length;
    
    outlet(0, "samples " + samplesNumber);
    outlet(1, resultingFeaturesArray);


}
