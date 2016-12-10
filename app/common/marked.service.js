(function () {
    'use strict';

    var app = angular.module('blogApp');

    app.factory('marked', function () {

        // Markdown conversion settings
        marked.setOptions({
            // GitHub Flavored Markdown
            gfm: true,
            // GFM tables
            tables: true,
            // GFM line breaks
            breaks: true,
            // Better lists handling
            smartLists: true,
            // Better punctuation handling
            smartypants: true,
            // Code blocks language prefix (reset default)
            langPrefix: '',
            // Prefix for headings ID's
            headerPrefix: 'hid-',
            highlight: false
        });

        return {
            convert: function (md) {
                return marked(md);
            }
        };
    });
}());
