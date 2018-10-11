'use strict';
// JavaScript for use with the index page.

var photoID;

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var mainAuthor = $('#main-author');
            mainAuthor.html(json.author);

            var mainName = $('#main-name');
            mainName.html(json.name);

            var mainLicense = $('#main-license');
            mainLicense.html(json.license);

            var mainScore = $('#main-score');
            mainScore.html(json.score);

            photoID = json.id;
        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}


function toggleDetails() {
    var x = document.getElementById("details-panel");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function refreshPage() {
    location.reload();
}




/*
This up-votes the image and reloads the page
*/
function upVote() {
    $.post(buildUrl('/id/' + photoID + '/vote/up'), function (data) {
        $(".result").html(data);
    });
    location.reload();
}

/*
This down-votes the image and reloads the page
*/
function downVote() {
    $.post(buildUrl('/id/' + photoID + '/vote/down'), function (data) {
        $(".result").html(data);
    });
    location.reload();
}



// runs functions as the page loads
$(function () {
    loadRandomImage();
});



