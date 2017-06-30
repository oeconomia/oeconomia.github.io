(function () {
    'use strict'

    angular
        .module('app')
        .factory('StorageService', StorageService)

    StorageService.$inject = ['$rootScope']
    function StorageService($rootScope) {
        var service = {}

        service.Get = Get
        service.Put = Put
        service.Delete = Delete

        initService()

        return service

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearFlashMessage()
            })

            function clearFlashMessage() {
                var flash = $rootScope.flash
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false
                    }
                }
            }
        }

        function Get(user, hash) {
        }

        function Put(user) {
        }
        
        function Delete(user) {
        }
    }

})()
