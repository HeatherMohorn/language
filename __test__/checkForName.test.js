// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the check functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the checkForName() function", () => {

           expect(checkForName).toBeDefined();
})});
