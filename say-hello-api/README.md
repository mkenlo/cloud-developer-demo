# Description
This is a simple API with 3 endpoints:
1. GET `/` : entry endpoint
2. GET `/hello/<language>` : return translation of the word 'hello' into language <language>
3. POST `/translate` POST : add a new translation to the DB. PostData is json object with 2 keys (<language> and <word>) with string values.