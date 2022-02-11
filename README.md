# How to automate a monorepo deployment with GitHub actions.

[Article Link](https://www.ayoubkanoun.com/blog/how-to-automate-your-deployment-process-with-gitHub-actions)

## Install dependencies

```javascript
yarn install
```

## Run development server

1. backend

```javascript
cd /packages/sevrer
yarn start:dev
```

1. frontend

```javascript
cd /packages/web
yarn dev
```

## Build for production

1. backend

```javascript
yarn build
```

2. frontend

```javascript
yarn build:web
```
