// jest.config.js
import type {Config} from '@jest/types';
export default {
  "automock": false,
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.svelte$': [
        'svelte-jester',
        {
          preprocess: true,
        },
      ],
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
  };