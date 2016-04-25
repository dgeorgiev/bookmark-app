angular.module('app', [
    'ba.components.bookmarks-app',
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate',
    'app.templates'
]).directive('app', function() {
    return {
        templateUrl: 'app/app.module.html'
    };
});



angular.module('app.templates', []);

try {
    angular.module('app.templates');
} catch ( error ) {
    angular.module('app.templates', []).constant('appVersion', null);
}

angular.module('app').config(function($mdThemingProvider) {
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
