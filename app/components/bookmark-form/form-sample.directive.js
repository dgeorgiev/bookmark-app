angular.module('gt.components.form-sample', [
    'ngMaterial',
    'ngMessages'
]).directive('formSample', function () {
    return {
        templateUrl: 'app/components/form-sample/form-sample.html',
        scope: true,
        link: function ( $scope ) {
            $scope.project = {
                description: 'Nuclear Missile Defense System',
                rate: 500
            };
        }
    };
}).directive('minusValidator', function () {
    return {
        require: '^ngModel',
        link: function ( i, j, k, ngModel ) {
            ngModel.$parsers.push(function ( value ) {
                ngModel.$setValidity('minusValidator', !/---/.test(value));
                return value;
            });
        }
    }
}).directive('creditCardMask', function () {
    function creditCardMaskFormatter( value ) {
        //http://www.peterbe.com/plog/cc-formatter
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[ 0 ] || '';
        var parts = [];
        for ( var i = 0, len = match.length; i < len; i += 4 ) {
            parts.push(match.substring(i, i + 4))
        }
        if ( parts.length ) {
            return parts.join(' ')
        }
    }

    return {
        require: '^ngModel',
        link: function ( k, $element, i, ngModel ) {
            $element.bind('keyup', function ( ) {
                var currentValue = $element.val();
                if (!currentValue) {return;}
                var formattedValue = creditCardMaskFormatter(currentValue);
                if ( formattedValue !== currentValue ) {
                    $element.val(formattedValue);
                }
                if ( formattedValue ) {
                    ngModel.$setViewValue(formattedValue.split(' ').join(''));
                }
            });
        }
    }
});
