import { defineUserConfig } from "@vuepress/cli";
import { version } from "../../../../lerna.json";
import type { HopeThemeOptions } from "vuepress-theme-hope";

export default defineUserConfig<HopeThemeOptions>({
  base: "/v2/sass-palette/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_kxwb6og9m5.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Sass Palette",
      description: "Sass Palette Plugin for VuePress2",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "Sass 调色板",
      description: "VuePress2 的 Sass 调色板插件",
    },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://vuepress-theme-hope.github.io",

    author: {
      name: "Mr.Hope",
      url: "https://mrhope.site",
    },

    iconPrefix: "iconfont icon-",

    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "docs/sass-palette/src",

    logo: "/logo.svg",

    footer: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    displayFooter: true,

    locales: {
      "/": {
        navbar: [
          "/README.md",
          "/guide.md",
          "/config.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 Docs",
                link: "https://vuepress-theme-hope.github.io/sass-palette/",
              },
            ],
          },
        ],

        sidebar: false,
      },

      "/zh/": {
        navbar: [
          "/zh/README.md",
          "/zh/guide.md",
          "/zh/config.md",
          {
            text: version,
            icon: "note",
            children: [
              {
                text: "V1 文档",
                link: "https://vuepress-theme-hope.github.io/sass-palette/zh/",
              },
            ],
          },
        ],

        sidebar: false,
      },
    },

    plugins: {
      comment: {
        type: "waline",
        serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      },

      mdEnhance: {
        codegroup: true,
      },

      pwa: {
        favicon: "/v2/sass-palette/favicon.ico",
        themeColor: "#46bd87",
        cachePic: true,
        apple: {
          icon: "/v2/sass-palette/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/v2/sass-palette/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "vuepress-plugin-sass-palette",
          short_name: "sass-palette plugin",
          icons: [
            {
              src: "/v2/sass-palette/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/sass-palette/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/v2/sass-palette/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/v2/sass-palette/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Guide",
              short_name: "Guide",
              url: "/v2/sass-palette/guide.html",
              icons: [
                {
                  src: "/v2/sass-palette/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/sass-palette/assets/icon/guide-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
            {
              name: "Config",
              short_name: "Config",
              url: "/v2/sass-palette/config.html",
              icons: [
                {
                  src: "/v2/sass-palette/assets/icon/config-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
                {
                  src: "/v2/sass-palette/assets/icon/config-monochrome.png",
                  sizes: "192x192",
                  purpose: "monochrome",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },
    },
  },
});