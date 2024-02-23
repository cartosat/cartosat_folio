# Use base node image.
FROM node:18-alpine

# Copy all files to desired folder.
COPY . /cartosat-folio

# Change working directory.
WORKDIR /cartosat-folio

# Install required dependencies.
RUN npm install

# Run command.
CMD ["npm", "start"]
