import { handleRedirect } from "./extends.js";
import { generateHTML } from "./generate.js";
import { logger } from "./utils.js";

import type { Page, PluginFunction } from "@vuepress/core";
import type { RedirectOptions } from "./options.js";
import type { RedirectPluginFrontmatterOption } from "./typings/index.js";

export const redirectPlugin =
  (options: RedirectOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info("Options:", options);

    return {
      name: "vuepress-plugin-redirect",

      extendsPage: (page, app) =>
        handleRedirect(
          <Page<Record<string, never>, RedirectPluginFrontmatterOption>>page,
          app,
          options
        ),

      onGenerated: (app): Promise<void> => generateHTML(app, options),
    };
  };
