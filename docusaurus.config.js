// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const GithubUrl = "https://github.com/github262302";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Yu-Blog",
    tagline: "一个记录知识的blog",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "github262302", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),

                    // Please change this to your repo.
                },
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "vimjs.com",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "start",
                        position: "left",
                        label: "文档",
                    },
                    { to: "/explore", label: "探索", position: "left" },
                    {
                        href: GithubUrl,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "home",
                                to: "/",
                            },
                            {
                                label: "Win10系统安装",
                                to: "/docs/computer/installationSystem/windows",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: GithubUrl,
                            },
                        ],
                    },
                    {
                        title: "友链",
                        items: [
                            {
                                label: "npm",
                                href: "https://www.npmjs.com/",
                            },
                            {
                                label: "webpack",
                                href: "https://webpack.docschina.org/",
                            },
                            {
                                label: "docusaurus",
                                href: "https://www.docusaurus.cn",
                            },
                        ],
                    },
                ],
                copyright: ` © ${new Date().getFullYear()} vimjs.com <a href="https://beian.miit.gov.cn" target="_blank">备案中</a> <br/>  update ${new Date().toLocaleString()}`,
                logo: { alt: "vimjs.com" },
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ["powershell"],
            },
            metadata: [
                {
                    name: "keywords",
                    content: "编程教程, blog, 魔法上网, 系统安装, yarn, npm",
                },
            ],
        }),
};

module.exports = config;
