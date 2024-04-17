
source youtube:
https://www.youtube.com/watch?v=WGmmbxxngjc 

how to run:
npm run dev

and automatically will run next.js and flask python

git add .
git init .
git commit -m "Instagram Non Follback list"
git branch -M main
git remote add origin https://github.com/fico-aditama/flask-nextjs.git
git push -u origin main


docker tag instafolower:latest fadi132/instafollower:latest
docker push fadi132/instafollower:latest
