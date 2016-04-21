angular.module('ba.components.bookmarks-list', [
    
]).directive('bookmarksList', function (bookmarksService, $state) {
    return {
        templateUrl: 'app/components/bookmarks-list/bookmarks-list.template.html',
        scope: {
            bookmarks: '=',
            tagsMap: '=',
            showForm: '=',
        },
        link: function($scope){
            $scope.bookmarks = $scope.bookmarks || [];
            $scope.selectedTag = $state.params.tag;
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.bookmarks = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
}).filter('filterTag', function($state){
    return function(records){
        return records.filter(function(record){
            return ($state.params.tag) ? record.tags.indexOf($state.params.tag) >= 0 : true;
        }); 
    };
});
