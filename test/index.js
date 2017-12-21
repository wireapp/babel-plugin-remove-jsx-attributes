/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const babel = require('babel-core');

function test(fixtureName) {
  it(fixtureName, function () {
    const fixturePath = path.resolve(__dirname, 'fixtures', fixtureName, `${fixtureName}.js`)
    const expectedPath = path.resolve(__dirname, 'fixtures', fixtureName, `${fixtureName}-expected.js`)
    const actual = babel.transformFileSync(fixturePath, {
        plugins: [[path.resolve(__dirname, '..', 'src'), {patterns: [
          /^data-uie/,
        ]}]],
        presets: ['react'],
      }).code;
    const expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
    assert.equal(actual + '\n', expected);
  });
}

[
  'class-two-attrs',
  'class-single-attr',
  'function-single-attr',
  'spread',
].map(test);
