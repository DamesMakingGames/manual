# DMG Manual

The DMG Manual documents our mission, values, structures, policies, tools, and guides that help our members understand and shape how we work and play together.

This document is reviewed and updated regularly by our board of directors, volunteers, organizers and committee members. It is a living document, and we invite pull requests, [issues](/manual/issues), questions and feedback. Read more about the process of suggesting changes or adding new content [here](https://manual.dmg.to/manual/how-to-edit-this-manual/).

## Contributing

To add new content in the manual, first create a file in the `manual` directory. Frontmatter should look like:

```
---
title: "Code of Conduct"
date: 2020-04-15
summary: DMG's Code of Conduct.
path: /code-of-conduct
tags: ["code-of-conduct", "community-manual"]
---
```

The body of the file must be written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Tags

Tags are used to structure the manual. If you’d like to use a new tag, create a file in the `tag` directory. Only frontmatter is required. For example:

```
---
id: organizers-manual
title: "Organizers Manual"
---
```

### Footnotes

To add footnotes, use the following notation:

```
Here is a footnote reference[^1]

[^1]: Here is the footnote.
```

### Table of Contents

To automatically add a TOC to your document, add the following to the location in your document you'd like it to appear:

```
### Table of Contents
```

## Development

If you'd like to work on the manual in a local development environment, follow these steps:

1. Install the [Gridsome](https://gridsome.org/) CLI tool: `npm install --global @gridsome/cli`
2. Clone this repo: `git clone git@github.com:DamesMakingGames/manual.git`
3. cd `manual`
4. npm install
5. `gridsome develop` to start a local dev server at http://localhost:8080

## License 

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/)
