describe('fizzBuzz', function() {

  beforeEach(function() {
    spyOn(console, 'log')
  })

  it('should exist', function() {
    expect(fizzBuzz).toEqual(jasmine.any(Function));
  })

  it('should call console.log the correct number of times', function() {
    fizzBuzz();
    expect(console.log.calls.count()).toEqual(47);
  })

  it('should work correctly', function() {
    fizzBuzz();
    expect(console.log.calls.all()[41].args[0].toLowerCase()).toEqual('fizz')
    expect(console.log.calls.all()[12].args[0].toLowerCase()).toEqual('buzz')
    expect(console.log.calls.all()[42].args[0].toLowerCase()).toEqual('fizzbuzz')
  })
})
