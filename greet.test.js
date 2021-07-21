//TestCase for greet function
describe('This test is testing the greet function' , function(){
    it('should show you Hello Tumelo' , function(){
        assert.equal("Hello, Tumelo",greet("Tumelo"));
    });
    it('should show you Hello Sima' , function(){
        assert.deepEqual("Hello, Sima",greet("Sima"));
    });
    it('should not equal to Hello Sima' , function(){
        assert.notEqual("Hello, Sima",greet("Dima"));
    });
});

