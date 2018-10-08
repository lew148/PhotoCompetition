'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '18.202.128.247';
var token = '892e1fac-76f9-47d9-8083-3fe7aaa3ae00';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
