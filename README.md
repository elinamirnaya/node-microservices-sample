## Available Scripts

In the project directory, you can run:

### `node index.js`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `docker build -t <enter-your-image-file-name-here> .`

This command used the Dockerfile to build a new container image.

### `docker run -dp 3000:3000 <enter-your-image-file-name-here>`

Start Docker container using the docker run command and specify the name of the image.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `docker ps`

List containers.

### `docker stop <container-id>`

Stop one or more running containers.
