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

module.exports = function ({Plugin, types: t}) {
  return {
    visitor: {
      JSXElement({node}, {opts: {patterns = [], checkEnvironment = false}}) {
        if (!checkEnv || (checkEnvironment && process.env.REMOVE_JSX_ATTRIBUTES)) {
          node.openingElement.attributes = node.openingElement.attributes
            .filter((attributeEntry) => !patterns.some((regex) => attributeEntry.name ? new RegExp(regex).test(attributeEntry.name.name) : false));
        }
      }
    }
  };
}
