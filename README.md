# Full Stack JavaScript

This repository contains a structured course in modern full stack JavaScript
development. The required path focuses on React, Node.js, Express, and MongoDB.
Advanced topics and independent specializations are kept available without
interrupting the core learning path.

The published course is available at
[prof-davidaffo.github.io/fullstackopen-ita](https://prof-davidaffo.github.io/fullstackopen-ita/).

## Course structure

- **Core course (parts 0–5):** web fundamentals, React, REST APIs, Node.js,
  Express, MongoDB, testing, authentication, and client-side routing.
- **Advanced topics (parts 6–7):** state management, hooks, build tooling,
  application organization, and security.
- **Specializations (parts 8–14):** GraphQL, TypeScript, React Native, CI/CD,
  containers, relational databases, and Next.js.

The curriculum shown on the site is defined centrally in
`src/courseConfig.js`. Source material that is not part of the published
learning path is retained in the repository for attribution and future reuse.
Legacy university logistics and promotional pages are likewise retained as
source files but are not published by the site.

## Development

Install the dependencies and start the site:

```bash
npm i
npm run develop
```

Use `npm run check` to verify formatting and `npm run build` to create a
production build.

## Origin and license

This project is derived from the University of Helsinki's Full Stack Open
course. The original material was created by Matti Luukkainen and the many
authors and contributors credited in the source material.

The material remains licensed under the
[Creative Commons BY-NC-SA 3.0 license](https://creativecommons.org/licenses/by-nc-sa/3.0/).
Modified material distributed from this repository must retain attribution and
use the same license. Commercial use requires permission.
