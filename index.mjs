import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { jest, junit, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('jest.passed', { json: jest, junit });

export default testRunner(reports, 'jest.run', adapter);
