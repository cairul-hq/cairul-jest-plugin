import { join } from 'node:path';
import { list, option, report, selectors, value } from '@cairul/plugin-kit/runner';
import { jest } from '@cairul/plugin-kit/reports';

export default {
  command: ['jest'],
  select: selectors({ files: list, namePattern: value, projects: list }),
  build({ files, namePattern, projects }, temp) {
    return {
      args: [
        '--ci',
        '--watch=false',
        '--json',
        '--outputFile',
        join(temp, 'result.json'),
        ...option('--testNamePattern', namePattern),
        ...(projects ? ['--selectProjects', ...projects] : []),
        ...(files ? ['--runTestsByPath', '--', ...files] : []),
      ],
      read: report('result.json', jest),
    };
  },
};
