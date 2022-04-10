const TEST_OBJECT = {'key': 'Value'};
const TEST_ARRAY = [];

TEST_OBJECT.key = "Some other value";
TEST_ARRAY.push("array item 1");

console.log(TEST_OBJECT);
console.log(TEST_ARRAY);