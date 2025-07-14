# Markdown to Medium Previewer

This project is a simple web application built with React that allows users to preview Markdown content, similar to how it would appear on platforms like Medium. It features a live preview, a clean user interface, and a dark mode.

![Image](https://raw.githubusercontent.com/Raghavvram/markdown-to-medium-converter/bbdd5ae1e5f70ec2d1bf2825533a7d67903aebb1/public/md-to-medium.png)


## Features

- Live Markdown preview
- Responsive design with Tailwind CSS
- Default dark mode

## Technologies Used

- React
- TypeScript
- Marked (for Markdown parsing)
- Tailwind CSS

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository-url>
    cd md-to-medium
    ```

2.  **Install dependencies:**

    Navigate to the project directory and install the required npm packages:

    ```bash
    npm install
    ```

### Running the Application

To start the development server and view the application in your browser:

```bash
npm start
```

This will open the application in your default web browser at `http://localhost:3000` (or another available port).

### Building for Production

To create an optimized production build of the application:

```bash
npm run build
```

This command will create a `build` folder containing the static assets. You can then deploy this folder to any static hosting service.

To serve the production build locally, you can use a static server like `serve`:

1.  **Install `serve` globally (if you haven't already):**

    ```bash
    npm install -g serve
    ```

2.  **Serve the build folder:**

    ```bash
    serve -s build
    ```

    This will serve the production build at `http://localhost:3000` (or another available port).

## Dockerization

This project can be easily containerized using Docker.

### Building the Docker Image

To build the Docker image, navigate to the root of the project directory and run the following command:

```bash
docker build -t markdown-to-medium-converter .
```

This command builds a Docker image named `markdown-to-medium-converter` based on the `Dockerfile` in the project root.

### Running the Docker Container

Once the Docker image is built, you can run the application in a Docker container using the following command:

```bash
docker run -p 3000:3000 markdown-to-medium-converter
```

This command runs the `markdown-to-medium-converter` image and maps port `3000` of your host to port `3000` inside the container. You can then access the application in your web browser at `http://localhost:3000`.

## Project Explanation

This project started as a basic React Markdown previewer. The development process involved:

1.  **Initial Component Setup:** Creating the `MarkdownPreview` component with basic Markdown parsing using the `marked` library.
2.  **Styling with Tailwind CSS:** Integrating Tailwind CSS for a modern and responsive UI. This involved installing Tailwind, configuring `tailwind.config.js`, and refactoring component styles to use Tailwind utility classes.
3.  **Dark Mode Implementation:** Adding a dark mode feature, which is enabled by default. This was achieved by configuring Tailwind CSS for dark mode and applying `dark:` prefixed classes to elements.
4.  **Production Readiness:** Ensuring the project is optimized for deployment by resolving build errors and removing unused code.
