(function () {
    'use strict'

    angular
        .module('app')
        .controller('ClanController', ClanController)

    ClanController.$inject = ['UserService', '$rootScope']
    function ClanController(UserService, $rootScope) {

    }

})()
