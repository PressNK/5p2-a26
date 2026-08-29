# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Generate a PDF from a Markdown file

You can convert any `.md` file into a PDF using [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf), with the shared config `md-to-pdf.config.js` (landscape layout, styled tables, etc.):

```
npx md-to-pdf "docs/your-file.md" --config-file "md-to-pdf.config.js"
```

This generates a PDF file next to the source Markdown file (e.g. `docs/your-file.pdf`).

