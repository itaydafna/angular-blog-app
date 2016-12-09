(function(){
    'use strict';

    var app = angular.module('blogApp');

    app.factory('dataService',function($log,$q,$http,utils){
        $log.debug('dataService');

        var dataCache = {},
            defer = $q.defer(),
            postsPromise = defer.promise;

        $http.get('data/posts.json')
            .success(function(data,status){
                dataCache.posts = data.posts;
                defer.resolve(dataCache);
            })
            .error(function(data,status){
                $log.error(status,data)
            });

        return{
            get: function (){
                return postsPromise;
            }
        }
    })

})()
