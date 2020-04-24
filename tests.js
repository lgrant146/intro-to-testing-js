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
// Unit tests for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" to when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World! when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    })
});
// Unit tests for isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when input is 5', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when input is "5"', function(){
        expect(isFive("5")).toBe(true);
    });
    it('should be false when 4 is passed in', function(){
        expect(isFive(4)).toBe(false);
    })
});
// Unit tests for isEven function
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should be a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with 8', function () {
            expect(isEven(8)).toBe(true);
    });
    it('should return false when executed with Infinity', function () {
            expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when executed with false', function () {
        expect(isEven(false)).toBe(false);
    });
});
