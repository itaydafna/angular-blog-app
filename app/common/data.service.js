(function(){
    'use strict';

    var app = angular.module('blogApp');

    app.factory('dataService',function($log,$q,$http,utils){
        $log.debug('dataService');

        var dataCache = {},
            defer = $q.defer(),
            postsPromise = defer.promise;

        /**
         * Fetch posts data
         */

        $http.get('data/posts.json')
            .success(function(data,status){
                dataCache.posts = data.posts;
                defer.resolve(dataCache);
            })
            .error(function(data,status){
                $log.error(status,data)
            });
        /**
         * Data API
         */

        return{
            /**
             * Get all posts or single post data
             * `get()` - Will get all of the data
             *
             * @returns {Object} A Promise
             */
            get: function (){
                return postsPromise;
            },

            /**
             * Get a single post data by Title
             *
             * @param  {string} id Post Title
             * @return {Object}    Promise
             */
            getById: function (id) {
                var defer = $q.defer();

                // Make sure the data is ready
                // This will run even if the data has already been fetched
                postsPromise.then(function (data) {
                    // Make sure we're comparing the same title
                    var cleanId = utils.cleanTitle(id),
                        existingPost = false;

                    // Filter the data to only the relevant post
                    $.each(data.posts, function (inx, post) {
                        if (utils.cleanTitle(post.title) === cleanId) {
                            existingPost = true;

                            defer.resolve(post);

                            // Stop the loop
                            return false;
                        }
                    });

                    // Post doesn't exist
                    if (!existingPost) {
                        defer.reject(id);
                    }
                });

                return defer.promise;
            },
        }
    })

})()
