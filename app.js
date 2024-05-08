function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();

    var years = now.getFullYear() - dob.getFullYear();
    var months = now.getMonth() - dob.getMonth();
    var days = now.getDate() - dob.getDate();

    var ageString = years + " years, " + months + " months, " + days + " days";
    document.getElementById('age').innerText = ageString;
}
