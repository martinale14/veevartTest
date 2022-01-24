const RequestService = require('../src/infraestructure/request_service');

test('Validate if whitout user input not returns a number', () => {
    expect(RequestService.requestNumber(['this is a test'])).not.toBe(2);
});