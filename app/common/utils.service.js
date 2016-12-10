(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.factory('utils', function ($log, $q, $http) {
        $log.debug('dataService');

        return {
            /**
             * Replace all word delimiters into on `-`, between each word
             *
             * @param  {string} title Dirty string
             * @return {string}       Clean string
             */
            cleanTitle: function (title) {
                return title && title.replace(/[^a-z0-9]+/gi, '-');
            },

            /**
             * Replace all word delimiters into on `-`, between each word
             * Also apply lowercase
             *
             * @param  {string} title Dirty string
             * @return {string}       Clean string (in lowercase)
             */
            cleanTitleLower: function (title) {
                return title && this.cleanTitle(title).toLowerCase();
            },

        }

    })
})();

