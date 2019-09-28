const postcssNested = require("postcss-nested");
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPlugins = [tailwind(), postcssNested];
require("dotenv").config();
const slugify = require("slugify");

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "DMG Community Docs",
  siteDescription: "DMG member manual",
  siteUrl: "https://manual.dmg.to",
  templates: {
    Post: "/manual/:path",
    Tag: "/tag/:id"
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "manual/**.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag"
          }
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "tags/**.md",
        typeName: "Tag"
      }
    },

    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
