let firstTimeInput = document.getElementById('Tz1Input');
let secondTimeInput = document.getElementById('Tz2Input');
let timeZone1 = document.getElementById('Tz1Select');
let timeZone2 = document.getElementById('Tz2Select');
let convertButton = document.getElementById('convert');

function calcTz1Time(offset) {
    // create Date object for current location
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));

    // return time as a string
    // return “The local time in ” + city + ” is ” + nd.toLocaleString();
    return nd;
}

function timeZoneCalculator(firstTzDate, SecondTzOffset) {
    // create Date object for current location
    d = firstTzDate;

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*SecondTzOffset));

    // return time as a string
    // return “The local time in ” + city + ” is ” + nd.toLocaleString();
    return nd;
}


function localTime() {
    let time = new Date();
    return time;
}

function updateLocalTime(evt) {
    firstTimeInput.value = evt.toLocaleTimeString('en-US');
}

function updateSecondaryTime(evt) {
    secondTimeInput.value = evt.toLocaleTimeString('en-US');
    // console.log(evt);
    console.log('Second TZ Changed');
}


updateLocalTime(localTime());

// firstTimeInput.value = "test";

function updateTz1(){
    if (timeZone1.value === 'local') {
        updateLocalTime(localTime());
    } else {
        // console.log(timeZone1.value);
        updateLocalTime(calcTz1Time(timeZone1.value));
    }
}

// function updateTz2(){
//     if (timeZone1.value === 'local') {
//         updateSecondaryTime(convertTime());
//     } else {
//         // console.log(timeZone1.value);
//         updateLocalTime(calcTz1Time(timeZone1.value));
//     }
// }

function convertTime() {
    if (timeZone1.value !== 'local'){
        firstCountryDate = calcTz1Time(timeZone1.value);
        secondCountryDate = timeZoneCalculator(firstCountryDate, timeZone2.value);
        return secondCountryDate;
    } else {
        firstCountryDate = localTime();
        secondCountryDate = timeZoneCalculator(localTime(), timeZone2.value);
        return secondCountryDate;
    }
}

updateSecondaryTime(convertTime());