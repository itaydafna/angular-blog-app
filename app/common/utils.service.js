(function() {
    'use strict';

    var app = angular.module('blogApp');

    app.factory('utils', function ($log, $q, $http,$location) {
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

            /**
             * Get the Query Params of a URL as a string
             *
             * @return {string|null} Query Params
             */
            getQueryUrl: function(){
                var url = $location.url();
                if (url.indexOf('?') > -1) {
                    return url.slice(url.indexOf('?'));
                }

                return null;
            }

        }

    })
})();

