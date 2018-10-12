'use strict';

function loadTopRatedImage() {
    fetch(buildUrl('/top'))
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {

            var topImage = $('#top-image');
            topImage.attr('src', json.url);
            topImage.attr('alt', 'Photo Competition image, ' + json.name);

            var topAuthor = $('#top-author');
            topAuthor.html(json.author);

            var topName = $('#top-name');
            topName.html(json.name);

            var topLicense = $('#top-license');
            topLicense.html(json.license);

            var topScore = $('#top-score');
            topScore.html(json.score);

            photoID = json.id;
        });
}


function toggleDetails() {
    var x = document.getElementById("details-panel");

    var y = document.getElementById("details-button");

    if (x.style.display === "none") {
        y.style.backgroundColor = "#d4ffc8"
        x.style.display = "block";
    } else {
        y.style.backgroundColor = "honeydew"
        x.style.display = "none";
    }
}



$ (function() {
    loadTopRatedImage();
})