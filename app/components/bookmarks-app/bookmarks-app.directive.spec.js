describe('ba.components.bookmarks-app', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('material.components.dialog'));
    beforeEach(module('ba.components.bookmarks-app'));
    
    
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
    
    var directive, $state, $mdDialog, $q;
    beforeEach(inject(function ($compile, directiveBuilder, _$state_, _$mdDialog_, bookmarksService, _$q_) {
        $state = _$state_;
        $mDialog = _$mdDialog_;
        $q =  _$q_;
        
        directive = directiveBuilder.$build('<bookmarks-app></bookmarks-app>');
        
        console.log(directive.scope);
        directive.scope.showForm();
        directive.scope.$digest();
        directive.scope.showForm().hide();
        //directive.scope.bookmarks = bookmarks;
    }));



    // it('has a bool filter', inject(function($filter) {
    //     expect(directive.$filter('tag')).not.toBeNull();
    // }));

    it('should equal to ethalon html', inject(function () {
        
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
