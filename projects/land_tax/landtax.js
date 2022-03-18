function estimateLandValue(propertyValue) {
    /*
    For illustrative purposes, the user only provides property value, not land value.
    A linear regression model then estimates land value based on property value.
    Based on NSW property and land values selected manually from a map.
    */

    let landValue = 70658.50 + (0.48 * propertyValue);
    return landValue;

}

function calculateLandTax(landValue, duration) {
    /*
    Land tax is a function of the value of the land. 
    In NSW, there is a threshold of $734000, land will only be taxed if it exceeds the threshold.
    There is also a premium threshold applied to land worth more than $4488000.
    It is an annual payment and this function returns an array of cumulative land tax over a given duration.
    Tax rates as at 2020, not updated.
    */

    let threshold = 734000;
    let premium = 4488000;
    let landTax = 0;

    // Calculating the land tax
    if (landValue < threshold) {
        landTax = 0;
    } else if (landValue > premium) {
        landTax = (60164 + (0.02 * (landValue - premium)));
    } else {
        landTax = (100 + (0.016 * (landValue - threshold)));
    }

    // Calculating the cumulative land tax
    let cumulativeLandTax = [];
    for (let index = 0; index < duration; index++) {
        cumulativeLandTax[index] = landTax * (index + 1);
    }

    return cumulativeLandTax;

}

function calculateStampDuty(propertyValue, duration, paybackPeriod, interestRate) {
    /*
    Stamp duty in NSW is calculated according to tax brackets.
    It is a one-off payment but interest may apply.
    This function returns an array of the stamp duty + interest in every period.
    Tax rates as at 2020, not updated.
    */

    // Calculating the stamp duty
    let stampDuty = 0;

    if (propertyValue <= 14000) {
        stampDuty = (0.0125 * propertyValue);
    } else if(propertyValue <= 30000){
        stampDuty = (175 + (0.015 * (propertyValue - 14000)));
    } else if(propertyValue <= 81000){
        stampDuty = (415 + (0.0175 * (propertyValue - 30000)));
    } else if(propertyValue <= 304000 ){
        stampDuty = (1307 + 0.035 * (propertyValue - 81000));
    } else if(propertyValue <= 1013000){
        stampDuty = (9112 + 0.045 * (propertyValue - 304000));
    } else if(propertyValue <= 3040000){
        stampDuty = (41017 + 0.055 * (propertyValue - 1013000));
    } else{
        stampDuty = (152502 + 0.07 * (propertyValue - 3040000));
    }

    // Calculating with interest
    let interestStampDuty = [];
    r = interestRate/100;
    n = 4;
    
    for (let index = 0; index < duration; index++) {
        

        if (index <= paybackPeriod - 1) {
            interestStampDuty[index] = stampDuty * (1 + r/n) ** (n * index);
        } else {
            interestStampDuty[index] = stampDuty * (1 + r/n) ** (n * paybackPeriod);
        }
        
    }

    return interestStampDuty;

}

function display(){

    var propertyValue = document.getElementById("houseprice").value;
    var t = document.getElementById("years").value;

    var landValue = estimateLandValue(propertyValue);
    var landTax = calculateLandTax(landValue,t);
    var stampDutyInterest = calculateStampDuty(propertyValue,t,30,2.69);
    var stampDutyNoInterest = calculateStampDuty(propertyValue,t,30,0);

    var displayPlotLandTax = {
        x: Array.from({length: t}, (_, index) => index + 1),
        y: landTax,
        type: 'scatter',
        name: 'Land Tax'
    };

    var displayPlotStampDutyNoInterest = {
        x: Array.from({length: t}, (_, index) => index + 1),
        y: stampDutyNoInterest,
        type: 'scatter',
        name: 'Stamp Duty (No Interest)'
    };

    var displayPlotStampDutyInterest = {
        x: Array.from({length: t}, (_, index) => index + 1),
        y: stampDutyInterest,
        type: 'scatter',
        name: 'Stamp Duty (Interest)'
    };

    var displayPlotData = [ displayPlotLandTax, displayPlotStampDutyNoInterest, displayPlotStampDutyInterest ];

    var displayPlotConfig = {responsive: true};

    var displayPlotLabels = {
        title:'Stamp duty vs land tax',
        xaxis: {
            title: 'Years since purchase'
        },
        yaxis: {
            title: 'Tax (AUD)'
        }
    };

    Plotly.newPlot('displayPlot', displayPlotData, displayPlotLabels, displayPlotConfig);

}

//propertyValue = 2000000;
//landValue = estimateLandValue(propertyValue);