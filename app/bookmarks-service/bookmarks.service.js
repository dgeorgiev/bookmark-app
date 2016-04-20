angular.module('ba.bookmarks-service', [
    'ngResource'
]).service('bookmarksService', function ($rootScope, $resource, $timeout) {

    var c = {
        mongolabUrl: 'https://api.mongolab.com/api/1/databases',
        collection: 'bookmarks',
        dataBase: 'angular-training-bookmarks',
        apiKey: 'KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA'   
    };
    var url = [c.mongolabUrl, c.dataBase, 'collections', c.collection, ':id'].join('/');
    var Bookmarks = $resource(url, {apiKey: c.apiKey}, {
        update: {method: 'PUT'}
    });
    
    Bookmarks.prototype.remove = function(){
        
        var id = this._id.$oid;
        
        $rootScope.bookmarks = $rootScope.bookmarks.reduce(function(ret, element){
            if(element._id.$oid != id) ret.push(element);
            return ret;
        }, []);
        
        console.log(this.$delete(id));
        
    };
    
    return Bookmarks;
    
});
