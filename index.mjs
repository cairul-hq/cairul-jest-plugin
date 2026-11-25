import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { jest, junit, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('jest.passed', { json: jest, junit });

export default testRunner(reports, 'jest.run', adapter);
