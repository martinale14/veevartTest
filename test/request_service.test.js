const RequestService = require('../src/infraestructure/request_service');

// Validating the requesting service not crashing
test('Validate if whitout user input not returns a number', () => {
    expect(RequestService.requestNumber(['this is a test'])).not.toBe(2);
});