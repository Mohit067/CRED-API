//test.js
function sum(a, b) {
    return a+b;
}
function substrac(a, b){
    return a-b;
}

//--------------------------------------------


//demo.test.js
describe("Summation Tests", () => {
    test('add 1+3 to equals 3', () => {
        expect(sum(1,2)).toBe(3);
        //expect(actual output.toBe(expected output))
    });
    
    test('add 3+6 is not equals to 6', ()=> {
        var result = sum(3+6);
        expect(result).not.toBe(5);
    });
});


describe("Substraction Tests", () => {
    test('sustract 5-3 to equal 2', () => {
        expect(substrac(5,3)).toBe(2);
    })
});


test("Number Testing", () => {
    var n1 = 3;
    var n2 = 8; 
    var n3 = 6;

    expect(n1+n2).toBeGreaterThan(10);
    expect(n1+n3).toEqual(9);
})

test("String testing", () => {
    var str = "Mohit wants to be an software developer engineer";

    expect(str).toMatch(/wants/);
    expect(str).not.toMatch(/htiwant/);
})

describe("Hookes Testing", () => {
    var in1 = 4;
    var in2 = 8;

    beforeAll(() => {// testing hook
        console.log("before all called / Runs once before all tests in a test suite.");
    });

    afterAll(() => { // testing hook
        console.log("after all called / Runs once after all tests in a test suite.");
    });

    beforeEach(() => { // testing hook
        console.log("before each called / Runs before each test in a test suite.");
        in1 = 1; 
        in2 - 2;
    });

    afterEach(() => { // testing hook
        console.log("after each called / Runs after each test in a test suite.");
    })

    test("the total of 1 and 2 is 3", () => {
        var result = sum(1, 2);
        expect(result).toBe(3);
    })

    test("the total of 1 and 6 is 7", () => {
        var result = sum(1, 6);
        expect(result).toBe(7);
    })
})