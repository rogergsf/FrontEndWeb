function validateSearch() {
    if (document.querySelector('#q').value == '') {
        alert("You can't let the search empty!");
        return false;
    }
}

document.querySelector('#form-searching').onsubmit = validateSearch;

var banners = ["Images/HTML-5.png", "Images/CSS-3.png", "Images/JS.png"];
var currentBanner = 3;
function switchBanner() {
    currentBanner = (currentBanner + 1) % 3;
    document.querySelector('.highlight img').src = banners[currentBanner];
}

var timer = setInterval(switchBanner, 1000);

var control = document.querySelector('.pause');
control.onclick = function () {
    if (control.className == 'pause') {
        clearInterval(timer);
        control.className = 'play';
    } else {
        timer = setInterval(switchBanner, 1000);
        control.className = 'pause';
    }
    return false;
};

var control = document.querySelector('.pause');

control.onclick = function () {
    var image = document.getElementById('play_pause');

    if (image.src.includes('pause.png')) {
        image.src = 'Images/play.png';
        clearInterval(timer);
    } else {
        image.src = 'Images/pause.png';
        timer = setInterval(switchBanner, 1000);
    }

    return false;
};
