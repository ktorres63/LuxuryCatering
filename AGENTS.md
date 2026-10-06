## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)



## Git and Commits

- NEVER create a commit automatically.
- NEVER run `git commit` unless the user explicitly asks for a commit.
- NEVER run `git push` unless the user explicitly asks for it.
- When making code changes, leave the changes uncommitted.
- When the user explicitly asks for a commit:
  1. Inspect `git status`.
  2. Inspect the relevant `git diff`.
  3. Include only files related to the requested task.
  4. Follow Conventional Commits.
  5. Run relevant validation when available.
  6. Create the commit only after these checks.
  7. Report the commit hash and message.

### Conventional Commit format

`type(scope): description`

Types:
- feat: new functionality
- fix: bug fix
- refactor: code restructuring without behavior change
- style: styling or formatting
- test: tests
- docs: documentation
- chore: maintenance/configuration/dependencies

Examples:
- `feat(cart): add quantity controls`
- `fix(cart): correct total calculation`
- `refactor(context): simplify cart reducer`
- `style(home): improve hero spacing`
- `test(cart): add reducer tests`
- `docs: update setup instructions`
- `chore: update dependencies`