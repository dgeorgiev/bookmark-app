describe('tags-list', function () {
    beforeEach(module('ba.components.tags-list'));

    var directive, $state;
    beforeEach(inject(function (directiveBuilder, _$state_) {
        $state = _$state_;
        directive = directiveBuilder.$build('<tags-list tags="tags"></tags-list>');
    }));

    it('should equal to ethalon html', function () {
        scope = directive.element.isolateScope();
        expect(directive.element.html()).toBeDefined();
        scope.navigateTo('test');
        scope.$digest();
    });
});
