angular.module('ba.components.bookmarks-list', [
    'ba.bookmarks-service'
]).directive('bookmarksList', function (bookmarksService) {
    return {
        templateUrl: 'app/components/bookmarks-list/bookmarks-list.html',
        link: function($scope){
            $scope.bookmarks = $scope.bookmarks || [];
        }
    }
});
