# Monorepo Pattern
The main purpose of this project is to demonstrate how to implement Monorepo pattern by means of Angular CLI.<br>
It's a demo project, that demonstrates the main concept, not a production ready solution from the product point of view.

## Getting started

### Prerequisites
1. Install **Node.js** which includes **Node Package Manager**.

### Setting Up a Project
1. Install dependencies:
```
npm install
```
2. You can run either the **whole** app, or a separate part:

- Run the **Integration** application (the whole application):
```
npm run start:container // localhost:8080
```
- Run the **Home page** part:
```
npm run start:home // Home pages, localhost:8081

```
- Run the **Dashboard page** part:
```
npm run start:dashboard // Dashboard, localhost:8082

```

### Packages
This is a monorepo which contains the following packages:
1. **Container** - the root of the app. It's a layout of the app, that consists of the menu (from the **UI-components** library) and router placeholder, that's filled based on the activated route.
2. **Home** - home pages, consists of About Us and News pages.
3. **Dashboard** - dashboards.
4. **UI-components** - ui component library, can't be run separately. Consistion of components, that are used in other applications.

### Architecture
When user opens the web site, the **Container** package is displayed. It displayes sub-packages, based on the activated route:
1. `/home` - **Home** package is displayed
2. `/dashboard` - **Dashboard** package is displayed
