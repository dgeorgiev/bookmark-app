describe('ba.bookmarks-service', function () {
    
    
    beforeEach(module('ba.bookmarks-service'));
    
    var bookmarksService, $httpBackend;
    
    beforeEach(inject(function (_bookmarksService_, _$httpBackend_) {
        bookmarksService = _bookmarksService_;
        bookmarksService.prototype.$update = function(ignored, callback){
            callback();
        };
        $httpBackend = _$httpBackend_;
    }));


    it('should get all bookmarks', inject(function(){
        $httpBackend.expect('GET', 'https://api.mongolab.com/api/1/databases/angular-training-bookmarks/collections/bookmarks?apiKey=KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA').respond(200, 
        [ { "_id" : { "$oid" : "57163da5e4b065a8c4d775e8"} , "name" : "Facebook" , "tags" : "test" , "url" : "http://facebook.com"} , { "_id" : { "$oid" : "5718db94e4b0e99eb262b0ed"} , "name" : "Twitter" , "url" : "http://twitter.com" , "tags" : "twitter, hello"} , { "_id" : { "$oid" : "571a082d0a00b2160cdda797"} , "name" : "google" , "url" : "http://google.bg" , "tags" : "google, evil"} , { "_id" : { "$oid" : "571dcd9ff8c2e747621458ec"} , "name" : "test" , "url" : "http://epam.com" , "tags" : "test, test2, test56"} ]
        );
        var result = bookmarksService.query();
        $httpBackend.flush();
        //dump(result);
        result.forEach(function(bookmark){
            bookmark.remove();
            bookmark.save();
        });
        
        //var $broadcast = spyOn(bookmarksService, '$broadcast');
        
        //directive.scope.$digest();
        //expect($broadcast).toHaveBeenCalled();
        //expect(OriginalResource.saidHello).toBe(true);
        //$httpBackend.expectGET(' /\/api/1/databases/angular-training-bookmark\/(.+)/')
          //      .respond([ { "_id" : { "$oid" : "57163da5e4b065a8c4d775e8"} , "name" : "Facebook" , "tags" : "test" , "url" : "http://facebook.com"} , { "_id" : { "$oid" : "5718db94e4b0e99eb262b0ed"} , "name" : "Twitter" , "url" : "http://twitter.com" , "tags" : "twitter, hello"} , { "_id" : { //"$oid" : "571a082d0a00b2160cdda797"} , "name" : "google" , "url" : "http://google.bg" , "tags" : "google, evil"} , { "_id" : { "$oid" : "571dcd9ff8c2e747621458ec"} , "name" : "test" , "url" : "http://epam.com" , "tags" : "test, test2, test56"} ]);
        // var result = bookmarksService.remove();
        
        //dump(result);

            // $httpBackend.flush();
    }));

    // describe('getUser', function () {
    //     // it('should call getUser with username', inject(function (User) {
    //     //     // $httpBackend.expectGET('/api/index.php/users/test')
    //     //     //     .respond([{
    //     //     //     username: 'test'
    //     //     // }]);

    //     //     // var result = mockBookmarksResource.getUser('test');

    //     //     // $httpBackend.flush();

    //     //     // expect(result[0].username).toEqual('test');
    //     // }));

    // });

});
