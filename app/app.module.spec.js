describe('app', function () {


    beforeEach(module('ngMaterial'));
    beforeEach(module('ngAria'));
    beforeEach(module('ngMdIcons'));
    beforeEach(module('app'));
    
    beforeEach(module('ba.components.bookmarks-app', function ($provide ) {
        var bookmarks = [
            {
                "_id": {
                "$oid": "571785b8e4b046f2cf46547a"
                },
                "url": "http://google.bg",
                "name": "Google sda",
                "tags": "test, asdzxc"
            },
            {
                "_id": {
                "$oid": "57163da5e4b065a8c4d775e8"
                },
                "name": "Facebook",
                "tags": "test, test2",
                "url": "http://facebook.com"
            },
            {
                "_id": {
                "$oid": "5718db94e4b0e99eb262b0ed"
                },
                "name": "Twitter",
                "url": "http://twitter.com",
                "tags": "twitter, hello"
            }
        ];
        $provide.factory('bookmarksService', function () {
            return {
                'get': function () {
                    return bookmarks[0];
                },
                'update': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(bookmarks);
                    return {
                        $promise: fakePromise.promise
                    };
                },
                'query': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(bookmarks);
                    return {
                        $promise: fakePromise.promise
                    };
                }
            };
        });
    }));
    
    
    var directive, $q;
    beforeEach(inject(function (directiveBuilder, _$q_) {
        $q = _$q_;
        directive = directiveBuilder.$build('<app></app>');
        
        
        //directive.scope.showForm().hide();
        //directive.scope.bookmarks = bookmarks;
    }));
    


    // it('has a bool filter', inject(function($filter) {
    //     expect(directive.$filter('tag')).not.toBeNull();
    // }));

    it('should equal to ethalon html', inject(function () {
        //expect(directive).toThrow();
        // dump(tagFilter([
        //     {
        //         "_id": {
        //         "$oid": "571785b8e4b046f2cf46547a"
        //         },
        //         "url": "http://google.bg",
        //         "name": "Google sda",
        //         "tags": "test, asdzxc"
        //     },
        //     {
        //         "_id": {
        //         "$oid": "57163da5e4b065a8c4d775e8"
        //         },
        //         "name": "Facebook",
        //         "tags": "test, test2",
        //         "url": "http://facebook.com"
        //     },
        //     {
        //         "_id": {
        //         "$oid": "5718db94e4b0e99eb262b0ed"
        //         },
        //         "name": "Twitter",
        //         "url": "http://twitter.com",
        //         "tags": "twitter, hello"
        //     }
        // ]));
        //expect(tagFilter({})).toBeTruthy();
        
        // expect(directive.element.html()).toBeDefined();
        
        // var $broadcast = spyOn(directive.scope, '$on').and.callThrough();
        
        
        // directive.scope.$digest();
        
        // directive.scope.$broadcast('deletedBookmark', '571785b8e4b046f2cf46547a', 'dasdsadas');
        
        
        //console.log(directive.scope.bookmarks);
        //dump($broadcast);
        //expect($broadcast);
    }));
        
});
