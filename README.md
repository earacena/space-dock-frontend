# Space Dock - Frontend

## Description

The frontend of a docker container deployment application in Typescript and React.

The backend of this project is found [here](https://github.com/earacena/space-dock-backend).

### Features

* Images
  * Create Images
    * Specify git repository to clone into image
    * Specify update, build, and start commands
    * Select a base image

* Containers
  * Launch containers
    * Launch container with created image
    * Open container in VsCode with 1-click when application is deployed locally (Requires "Dev - Containers" extension)

### Technologies

* Typescript
* React
* MUI components
* Vite

## Usage

### Download

While in terminal with chosen directory, enter the command:

```bash
git clone https://github.com/earacena/space-dock-frontend.git
```

### Install

To install dependencies, while in the root project folder, enter the command:

```bash
npm install
```

### Deploy locally for development

Ensure the backend is running, then in a separate terminal run the following in the root project folder:

```bash
vite
```

If that does not work, use the following:

```bash
npx vite
```
