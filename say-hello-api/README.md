# Description
This is a simple API with 3 endpoints:
1. GET `/` : entry endpoint
2. GET `/hello/<language>` : return translation of the word 'hello' into language <language>
3. POST `/translate` POST : add a new translation to the DB. PostData is json object with 2 keys (<language> and <word>) 
with string values.
4. GET `/health` : check API health

# Dependecies
- MongoDB

# How to run
Step 1: `pip install -r requirements.txt`
Step 2: 
    - Run development server: `flask run`
    - Run production server: `sh run.sh`