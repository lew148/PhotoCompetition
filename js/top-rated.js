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


$ (function() {
    loadTopRatedImage();
})