describe('ba.components.bookmarks-list', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('ba.components.bookmarks-list'));
    
    var directive, $state, bookmarks;
    beforeEach(inject(function (directiveBuilder, _$state_) {
        $state = _$state_;
        
        bookmarks = [
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
        
        directive = directiveBuilder.$build('<bookmarks-list bookmarks="bookmarks" show-form="showForm"></bookmarks-list>');
        directive.scope.bookmarks = bookmarks;
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
        
        expect(directive.element.html()).toBeDefined();
        
        var $broadcast = spyOn(directive.scope, '$on').and.callThrough();
        
        
        
        directive.scope.records = [];
        
        directive.scope.$digest();
        
        directive.scope.$broadcast('deletedBookmark', '571785b8e4b046f2cf46547a', 'dasdsadas');
        
        
        //console.log(directive.scope.bookmarks);
        //dump($broadcast);
        //expect($broadcast);
    }));
    
    
});
