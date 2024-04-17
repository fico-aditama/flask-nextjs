FROM ubuntu:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    python3 \
    python3-pip

# Install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install Node.js with nvm and set it as default
RUN /bin/bash -c "source ~/.nvm/nvm.sh && nvm install v21.7.3 && nvm alias default $(nvm current)"

RUN apt-get install -y npm

# Install Python dependencies
RUN pip3 install Flask Flask-Cors instaloader==4.11 numpy

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["/usr/src/app/start.sh"]


