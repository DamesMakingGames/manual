const postcssNested = require("postcss-nested");
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPlugins = [tailwind(), postcssNested];
require("dotenv").config();

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "DMG Community Docs",
  siteDescription: "DMG member manual",
  siteUrl: "https://manual.dmg.to",
  templates: {
    Post: "/member-manual/:path"
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "member-manual/**.md",
        typeName: "Post"
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "DMG Member Manual",
          feed_url: "https://member.dmg.to/rss.xml",
          site_url: "https://member.dmg.to/"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: "https://member.dmg.to" + node.path,
          author: "Jennie Robinson Faber",
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
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
