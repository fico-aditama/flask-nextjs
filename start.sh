#!/bin/bash

# Start Flask server
python3 app.py &

# Start Node.js server
npm run dev
