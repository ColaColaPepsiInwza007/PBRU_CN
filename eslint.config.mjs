import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
});

const eslintConfig = [...compat.extends('next/core-web-vitals')];

export default eslintConfig;