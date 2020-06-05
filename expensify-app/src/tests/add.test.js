// has to carry test.js  

const generateGreeting = (name) => `Hello ${name}`

test("should greet the name", ()=>{
    const result = generateGreeting("Yingshi")
    expect(result).toBe("Hello Yingshi")
})
