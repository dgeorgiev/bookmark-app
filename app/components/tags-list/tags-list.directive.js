angular.module('ba.components.tags-list', [
    'ui.router'
]).directive('tagsList', function ($state) {
    return {
        templateUrl: 'app/components/tags-list/tags-list.template.html',
        scope: {
            tags: '='
        },
        link: function($scope){
            $scope.selectedTag = $state.params.tag;
            $scope.navigateTo = function(tag){
                //$state.go('filtered', {tag: tag});
            };
        }
    };
});
