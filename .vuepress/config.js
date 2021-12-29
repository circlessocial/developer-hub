module.exports = {
    base: "/mobile-hub/",
    temp: "docs/.vuepress/temp",
    title: 'Developer Hub',
    description: 'Mobile team documentation',
    theme: "default-prefers-color-scheme",
    themeConfig: {
        overrideTheme: "dark",
        sidebar: [{
            sidebarDepth: 0,
            title: "Code standards",
            collapsable: false,
            children: [
                "pages/code-standard/conventions.md",
                "pages/code-standard/file-structure.md",
                "pages/code-standard/data.md",
                "pages/code-standard/import-and-export.md",
                "pages/code-standard/components.md",
                "pages/code-standard/dumb-components.md",
                "pages/code-standard/smart-components.md",
                "pages/code-standard/styles.md",
            ]}
        ]
    }
  }