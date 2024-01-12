// To utilize the default config system built, this file is required. It defines the *structure* of the configuration file. These structured options display as changeable UI elements within the "Config" section of the service details page in the StartOS UI.
import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  "fedimintd-config-api": {
    type: "pointer",
    name: "Fedimintd Config API",
    description: "The endpoint to use when connecting to the fedimint server to be managed.",
    subtype: "package",
    "package-id": "fedimintd",
    target: "config",
    multi: false,
    selector: "$.api.config",
  },
});
