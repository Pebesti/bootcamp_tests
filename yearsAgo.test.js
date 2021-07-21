//TestCase for yearsAgo function
describe('This test is testing the yearsAgo function' , function(){
    it('should show the number of numberplates belonging to Paarl (CJ)' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should show the number of numberplates belonging to Paarl (CJ)' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));    
    });
});