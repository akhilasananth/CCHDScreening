function initStorage() {
    var screeings = [];
    Lockr.set("screenings", screeings);
}
function addScreening(screeningObj) {
    var screenings = Lockr.get("screenings");
    screenings.push(screeningObj);
}
function Screening(rightHand) {
    this.rightHand = rightHand;
    this.foot = foot;
    this.success = function () {

    }
}
function Patient(lastName, firstName, healthCard, gender, dob, birthTime, submitterNumber) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.heathCard = healthCard;
    this.gender = gender;
    this.dob = dob;
    this.birthTime = birthTime;
    this.submitterNumber = submitterNumber
}

function Hospital(name, address, city, nurseFirstName, nurseLastName) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.nurse = nurseFirstName + " " + nurseLastName;
}

function Nurse(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
}
function addPatient(patientObj) {
    Lockr.set("patientInfo", patientObj);
}
function addHospital(hospitalObj) {
    Lockr.set("hospital", hospitalObj);
}

initStorage();
