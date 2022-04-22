# module-federation-local-override-example

Source code of a remote module using [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) which is meant to be served locally to override the one used in a production app example.

## Motivations

It allows your developers/customers to develop remote modules locally without having to onboard them on your architecture and install it on their local machine. It can be also helpful to debug on a production/preproduction environment

## Explanation

1. A static page working as a shell is served on the following URL -> [https://mf-shell-local-override-typename.vercel.app/](https://mf-shell-local-override-typename.vercel.app/)
2. The shell retrieves a remote module named `Header` which is served [here](https://mf-header-remote-module-typename.vercel.app/remoteEntry.js) and which is used to display the header components.
3. Running this project, it will serve the same remote module under `http://localhost:1337/remoteEntry.js` that you can customize.
4. Using the integrated devtools on the bottom of the page you can override the `Header` remote module with the one you are serving locally.
5. Using `promise new Promise` from Module Federation it will look if there is a local override configuration from the localStorage and fetch the local one instead on runtime.

## How to install and run it

__ℹ️ &nbsp;Makes sure you have installed Node >14.x with NPM (or Yarn)__

### Install all the dependencies:
```bash
npm install
```
or with yarn:
```bash
yarn
```

### Build & run locally:
```bash
npm run start
```
or with yarn:
```bash
yarn start
```

ℹ️ &nbsp; `remoteEntry.js` should be served on [http://localhost:1337/remoteEntry.js](http://localhost:1337/remoteEntry.js)


## How does it work

1. Install and run this project
2. Now that you are serving the remote module locally open the [production example app](https://mf-shell-local-override-typename.vercel.app/)
3. Add in the URL the following query parameter `?inspect=true`
4. On the bottom of the page a black bar should appear, click on `Maximize`
5. On the `Local module name` input type `Header`
6. On the `Local module URL` input type `http://localhost:1337/remoteEntry.js`
7. Refresh the page and voilà! The title should now be `Local` instead of `Default`

## Next steps
For now we can only override a remote module that is already specified on the remotes list of the shell. In the future we'll be able to dynamically add a new remote module from localhost.

## Troubleshooting
### I'm getting a CORS issue on `http://localhost:1337/remoteEntry.js`
This can happen if you have enabled the web experimental features on Google Chrome flags