/* eslint-disable no-magic-numbers */

function match(segments) {
  return (route) => {
    if (segments.length !== route.length) {
      return false
    }
    for (let i = 0; i < segments.length; i++) {
      if (segments[i] === true) {
        continue
      }
      if (segments[i] !== route[i]) {
        return false
      }
    }

    return true
  }
}

export const routes = {
  HomePage: {
    filter: match([])
  , backendPath: () => '/content'
  }
}

export function getBackendPath() {
  const path = window.location.pathname
  const pathParts = path.slice(1).split('/')

  // look for a match
  for (const k in routes) {
    if (routes[k].filter(pathParts)) {
      // found

      return routes[k].backendPath(pathParts)
    }
  }

  if (path === '/') {
    return '/content'
  }

// eslint-disable-next-line no-console
  console.error('No matching route found for the backend', path)

  routes['FourZeroFour'].noMatchFilter = true
  return '/content?section=404'
}
