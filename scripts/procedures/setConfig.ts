// This is where any configuration rules related to the configuration would go. These ensure that the user can only create a valid config.

import {
  compat,
  types as T
} from "../deps.ts";
export const setConfig: T.ExpectedExports.setConfig = async (effects, input ) => {

  const depsFedimintd: T.DependsOn = {fedimintd: ['alive']}

  return await compat.setConfig(effects,input, depsFedimintd)
}