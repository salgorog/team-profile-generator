const Manager = require('../lib/Manager');

test("test the object of an Manager", () => {
    const manager = new Manager("Roger", "salgorog@hotmail.com","45",500)

    expect(manager.office).toEqual(expect.any(Number));
});

test('test getRole()', () => {
    const manager = new Manager("Roger", "salgorog@hotmail.com","45",500)

    expect(manager.getRole()).toBe("Manager");
})