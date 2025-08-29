function showDay() {
    let day = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = days[day.getDay()];
    document.getElementsByClassName("day")[0].innerHTML = d;
}
showDay();

function showDate() {
    let today = new Date();

    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let month = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();
    let fullDate = month + " " + date + ", " + year;

    document.getElementsByClassName("date")[0].innerHTML = fullDate;
}
showDate();

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;

    // Fix: Access the first element in the collection returned by getElementsByClassName
    document.getElementsByClassName("time")[0].innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();
