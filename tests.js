// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//unit test for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!", when executed', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
});

describe ('isFive',function(){
    it('should be a defined function',function(){
        expect(typeof isFive).toBe('function');
    });
    it('should be a boolean',function(){
        expect(typeof isFive()).toBe('boolean');
    });
    //Ensure that isFive returns true when passed 5
it('should return 5',function(){
    expect(isFive(5)).toBe(true);
});
    //What about if we pass in the string "5"? Do you want isFive to return true for that?


})

// describe('sayHello',function(){
//     it('should be a defined function',function(){
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', function() {
//         expect(typeof sayHello()).toBe("string");
//     });
//     it('should return the string "hello, name!" when executed', function() {
//         expect(sayHello("name")).toBe("hello, name!");
//     });
//     it("should never return 'undefined' when called", function() {
//         expect(sayHello()).not.toBe(undefined);
//     });
// });
