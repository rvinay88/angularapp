'use strict';

angular.module('angularappApp')
  .service('feedReader', function ($rootScope, FeedLoader) {
   var feeds = [];
   this.get = function() {
       var feedSources = [
           {title: 'Beyond Kinetic', url: 'http://www.beyondkinetic.com/motion-ui-design-principles?format=RSS'},
           {title: 'Val Head', url: 'http://valhead.com/feed/'}
       ];
       if (feeds.length === 0) {
           for (var i=0; i<feedSources.length; i++) {
               FeedLoader.fetch({q: feedSources[i].url, num: 1}, {}, function (data) {
                   var feed = data.responseData.feed;
                   feeds.push(feed);
                   console.log("feeds");
                   console.log(feeds);
               });
           }
       }
       return feeds;
   };
});
