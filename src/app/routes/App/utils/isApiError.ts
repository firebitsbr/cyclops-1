/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is ControlScan, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 ControlScan, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as _ from 'lodash';
import { AxiosError } from 'axios';

/**
 * Determines if an error is one that was sent from the cyphon API.
 * @param {*} error The variable to check.
 * @return {Boolean}
 */
export function isApiError(error: Error | AxiosError): error is AxiosError {
  const hasConfigProperty = _.has(error, 'config');
  const hasResponseProperty = _.has(error, 'response');
  const configIsObject = _.isObject(_.get(error, 'config'));

  return hasConfigProperty && hasResponseProperty && configIsObject;
}
