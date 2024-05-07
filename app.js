function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();

    var years = now.getFullYear() - dob.getFullYear();
    var months = now.getMonth() - dob.getMonth();
    var days = now.getDate() - dob.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthDays;
        months--;
    }

    var ageString = years + " years, " + months + " months, " + days + " days";
    document.getElementById('age').innerText = ageString;
}