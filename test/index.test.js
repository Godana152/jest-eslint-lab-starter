const { capitalizeWords, filterActiveUsers, logAction } = require('../index')


// test for capitalization

describe('capitalizeWords', () => {

  test('capitalizes the first letter of every word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('returns an empty string when given an empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-world');
  });

  test('handles a single word', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

});


