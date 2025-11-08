import matchers from '@testing-library/jasmine-dom';

beforeEach(() => {
 jasmine.getEnv().addMatchers(matchers.default.default);
});