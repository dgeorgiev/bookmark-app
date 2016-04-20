angular.module('bookmarks-app', [
    'ba.components.bookmarks-list',
    'ba.components.tags-list',

    'ba.tags-service',
    'ba.bookmarks-service',
    
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate'
]).run(function($log, $rootScope, tagsService, bookmarksService, $mdDialog, $mdMedia, $timeout) {
    
    $rootScope.tags = tagsService.query();
    $rootScope.bookmarks = bookmarksService.query();
    
    $rootScope.showPrompt = function(ev) {
        $mdDialog.show({
            templateUrl: 'app/components/bookmark-form/bookmark-form.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            controller: DialogController,
            clickOutsideToClose:true,
            fullscreen: true
        })
        .then(function(answer) {
            $rootScope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $rootScope.status = 'You cancelled the dialog.';
        });
        
    };
    
    $rootScope.tags.$promise.then(function(data){
        $rootScope.tagsMap = data.reduce(function(tags, tag){
            tags[tag._id.$oid] = tag;
            return tags;
        }, []);
    });
    
}).directive('bookmarksApp', function() {
    return {
        templateUrl: 'app/app.module.html'
    };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.close = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

angular.module('bookmarks-app').config(function($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
