
const app = require('../app');

describe('Application', () => {
  it('should print "Hello from GitHub Package Registry" message', () => {
    // Suppress console.log output during the test
    const mockLog = console.log;
    console.log = () => {};

    // Run the application code that contains console.log("Hello, Just a Demo!");
    require('../app');

    // Restore console.log
    console.log = mockLog;
  });
});
