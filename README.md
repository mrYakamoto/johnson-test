# homeaway-bslp

The HomeAway booking season landing page.

## Installation

Requires Node 6.x+.

```bash
$ yarn
```

If you do not have `yarn`, run:

```bash
$ npm install -g yarn
```

## Building

### Development

Running the following command will produce a build that is unminified and
exposes several components for testing:

```bash
$ yarn run build
```

### Production

Running the following command will produce a build that is uglified and
minified:

```bash
$ yarn run prod
```

## Watching

Running the following command will run watchers for all the assets. It will also
open a `browser-sync` session for quick development. This command generates
development grade dists.

```bash
$ yarn run watch
```

## Logging

We are using the `debug` module for logging (inside the JS developer console):

```js
> localStorage.debug = 'habslp*'
```

If you only want to see errors, run:
```js
> localStorage.debug = 'habslp:error*'
```

## Tests

### Linting

The following command only runts the lint tests:

```bash
$ yarn run lint
```

### Full

The following command runs all tests. The chief method of testing is producing
Jest snapshots. It should fail even when the changes are expected:

```bash
$ yarn test
```

If the diff looks good, run the following commands to generate updated
snapshots:

```bash
$ yarn test -- -u
```

Then check the snapshots into version control.

### Pre-commit checks

Pre-commit checks are installed, meaning git will run `yarn test` before
allowing a commit. The pre-commit check will never update the snapshots.
