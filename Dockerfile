# Use base node image.
FROM node:18-alpine

# Copy all files to desired folder.
COPY . /cartosat-folio

# Change working directory.
WORKDIR /cartosat-folio

# Install required dependencies.
RUN npm install

# Build production ready build.
RUN npm run build

# Start serving from build folder.
RUN npm install -g serve

# Run command.
CMD ["serve", "-s", "build"]
