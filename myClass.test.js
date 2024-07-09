class MyClass {
  // No need for a constructor if there are no attributes to initialize

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  romanToInt(s) {
    // Create a dictionary to map Roman symbols to values
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };

    let result = 0; // Initialize the result
    for (let i = 0; i < s.length; i++) {
      const curr = romanValues[s[i]];
      const next = romanValues[s[i + 1]];
      if (next && curr < next) {
        result -= curr;
      } else {
        result += curr;
      }
    }
    return result;
  }
}

describe("MyClass", () => {
  let myClass;

  beforeEach(() => {
    myClass = new MyClass();
  });

  it("should add two numbers", () => {
    expect(myClass.add(2, 3)).toBe(5);
    expect(myClass.add(-1, 1)).toBe(0);
  });

  it("should subtract two numbers", () => {
    expect(myClass.subtract(5, 3)).toBe(2);
    // Add more test cases as needed
  });

  it("should multiply two numbers", () => {
    expect(myClass.multiply(2, 3)).toBe(6);
  });

  it("should divide two numbers", () => {
    expect(myClass.divide(3, 3)).toBe(1);
  });

  it("should turn roman into integer", () => {
    expect(myClass.romanToInt('LVIII')).toBe(58);
  });
});
