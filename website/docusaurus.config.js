const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const BASE_URL = "/";

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {

  title: "WEBMIDI.js",
  tagline: "Kickstart your JavaScript MIDI projects!",
  url: "https://webmidijs.org",
  baseUrl: BASE_URL,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "djipco",
  projectName: "webmidi",

  scripts: [
    // Inject MailChimp newsletter pop-up in <head>
    // {
    //   src: BASE_URL + "scripts/mailchimp/newsletter-exit-prompt.js",
    //   async: true,
    //   id: "mcjs"
    // }
  ],
  themeConfig: {
    navbar: {
      // title: "My Site",
      logo: {
        alt: "WEBMIDI.js",
        src: "img/webmidijs-logo-dark.svg",
        srcDark: "img/webmidijs-logo-light.svg",
      },
      items: [
        {
          label: "Docs",
          type: "doc",
          docId: "index",
          position: "left",
        },
        {
          type: "dropdown",
          label: "API",
          position: "left",
          items: [
            {
              label: "3.x",
              to: "api"
            },
            {
              label: "2.5.3",
              href: "https://djipco.github.io/webmidi/archives/api/v2/",
            },
            {
              label: "1.0.0-beta.15",
              href: "https://djipco.github.io/webmidi/archives/api/v1/classes/WebMidi.html"
            }
          ]
        },
        {
          type: "dropdown",
          label: "Community",
          position: "left",
          items: [
            {
              label: "Sponsors",
              to: "sponsors"
            },
            {
              label: "Showcase",
              to: "showcase"
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/djipco/webmidi/discussions",
              className: "external"
            },
            {
              label: "Newsletter Subscription",
              href: "https://mailchi.mp/eeffe50651bd/webmidijs-newsletter",
              className: "external"
            },
            {
              label: "Forum (Archived)",
              href: "https://webmidijs.org/forum/",
              className: "external"
            }
          ]
        },

        {
          type: "dropdown",
          label: "Behind the Scenes",
          position: "left",
          items: [
            {
              to: "about",
              label: "About",
            },
            {
              to: "blog",
              label: "Blog",
            },
          ]
        },





        {
          href: "https://github.com/djipco/webmidi",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repo"
        },
        {
          href: "https://twitter.com/webmidijs",
          position: "right",
          className: "header-twitter-link",
          "aria-label": "Twitter Feed"
        },

      ]
    },
    footer: {
      style: "dark",
      logo: {
        alt: "WebMidi.js",
        src: "img/webmidijs-logo-dark.svg",
        srcDark: "img/webmidijs-logo-light.svg",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quick Start",
              to: "/docs",
            },
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Migration",
              to: "/docs/migration",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Showcase",
              href: "/showcase",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/webmidijs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/djipco/webmidi",
            },
          ],
        },
      ],
      copyright: `© 2015-${new Date().getFullYear()} Jean-Philippe Côté`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      apiKey: "af63ae0f5f71033e19ac5047d02b08bb",
      indexName: "webmidi",
      appId: "BH4D9OD16A",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
      placeholder: "Search website..."
    },
    image: "img/og-card.png",
    metadata: [{ name: "robots", content: "max-image-preview:large" }],
    announcementBar: {
      id: "sponsor-banner",
      content: "<a target='_blank' href='https://github.com/sponsors/djipco'>" +
        "<strong>Sponsor</strong></a> ❤️ WEBMIDI.js on GitHub!"
    },
    gtag: {
      trackingID: "UA-162785934-1",
    },
    googleAnalytics: {
      trackingID: "UA-162785934-1"
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",

      {
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
            require.resolve("./src/css/index.scss"),
          ],
        },

        docs: {
          path: "docs",
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/djipco/webmidi/edit/master/website/",
        },


        blog: {
          path: "blog",
          blogTitle: "Blog de Docusaurus !",
          blogDescription: "Un blog alimenté par Docusaurus !",
          postsPerPage: "ALL",
        },

        pages: {},
      },
    ],
  ],

  plugins: [

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],

    [
      "docusaurus-plugin-sass",
      {}
    ],

    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: ["/latest/classes/WebMidi.html"], // string | string[]
            to: "/api",
          },
        ],
      },
    ],

  ],

};
