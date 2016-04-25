angular.module('ba.components.bookmarks-app', [
    'ba.components.bookmarks-list',
    'ba.components.bookmark-form',
    'ba.components.tags-list',

    'ba.bookmarks-service',

    'ui.router'
]).directive('bookmarksApp', function($mdDialog, bookmarksService){
    return {
        templateUrl: 'app/components/bookmarks-app/bookmarks-app.template.html',
        link: function($scope){
            $scope.bookmarks = bookmarksService.query();
            
            
            $scope.$on('bookmarksUpdated', function(event){
                $scope.bookmarks = bookmarksService.query();
                $mdDialog.hide();
            });
            
            $scope.$watch('bookmarks', function(){
                
                $scope.tags = $scope.bookmarks.$promise.then(function(data){
                    
                    data.forEach(function(record){
                    record.tags.split(',').forEach(function(tag){
                        if(!$scope.tags[tag.trim()]) {
                            
                                $scope.tags[tag.trim()] = {
                                    name: tag.trim(),
                                    count: 1
                                };
                        } else {
                            $scope.tags[tag.trim()].count++;
                        }
                        
                    });
                    });
                    
                });
            
            });
            
            $scope.showForm = function(ev, bookmark) {
                $mdDialog.show({
                    templateUrl: 'app/components/bookmark-form/bookmark-form.dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    
                    
                    controller: function($scope){
                        $scope.bookmark = bookmark || {};
                        
                        $scope.title = $scope.bookmark._id ? 'Edit bookmark' : 'Add bookmark';
                        
                        $scope.hide = function() {
                            $mdDialog.hide();
                        };

                    },
                    
                    clickOutsideToClose: false,
                    fullscreen: true
                });
                
            };
            
        }
    }      
});


angular.module('ba.components.bookmarks-app').config(function($stateProvider) {
  $stateProvider.state('bookmarks', {
    url: '/bookmarks',
    template: '<bookmarks-list bookmarks="bookmarks" show-form="showForm"></bookmarks-list>'
  }).state('filtered', {
    url: '/bookmarks/:tag',
    template: '<bookmarks-list bookmarks="bookmarks" show-form="showForm"></bookmarks-list>'
  });
});