describe('bookmarks-app.bookmarks-list', function () {
    beforeEach(module('ba.components.bookmarks-list'));

    var directive;
    beforeEach(inject(function (directiveBuilder) {
        directive = directiveBuilder.$build('<bookmarks-list></bookmarks-list>');
    }));

    it('should equal to ethalon html', function () {
        expect(directive.element.html()).toBeDefined();
    });
    
});
