describe('tags-list', function () {
    beforeEach(module('ba.components.tags-list'));

    var directive, $state;
    beforeEach(inject(function (directiveBuilder, _$state_) {
        $state = _$state_;
        directive = directiveBuilder.$build('<tags-list tags="tags"></tags-list>');
        directive.scope.tags = [
            {
                "name": "twitter",
                "count": 1
            },
            {
                "name": "hello",
                "count": 1
            },
            {
                "name": "test",
                "count": 1
            },
            {
                "name": "test2",
                "count": 1
            },
            {
                "name": "test56",
                "count": 1
            }
        ];
    }));

    it('should equal to ethalon html', function () {
        scope = directive.element.isolateScope();
        expect(directive.element.html()).toBeDefined();
    });
    
    it('should list all tags from scope', function(){
        directive.scope.$digest();
        expect(directive.element.children().find('md-list-item').length).toEqual(5);
        
        directive.scope.tags = [];
        directive.scope.$digest();
        expect(directive.element.children().find('md-list-item').length).toEqual(0);
    });
});
