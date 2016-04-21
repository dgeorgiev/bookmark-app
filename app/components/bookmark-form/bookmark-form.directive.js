angular.module('ba.components.bookmark-form', [
    'ba.bookmarks-service'
]).directive('bookmarkForm', function($rootScope, $mdDialog, $mdMedia, tagsService, bookmarksService){
    return {
        templateUrl: 'app/components/bookmark-form/bookmark-form.template.html',
        link: function($scope){
            $scope.close = function() {
                $mdDialog.cancel();
            };
            
            $scope.clear = function(form) {
                $scope.bookmark = {};
                form.$setPristine();
                form.$setUntouched();
            };
            
            
            $scope.save =  function(form) {
                bookmarksService.save($scope.bookmark);
                $rootScope.$broadcast('bookmarksUpdated', this);
            };
        }
    }      
});