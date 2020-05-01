# Contributing

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
