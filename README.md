### to start the project

npm start

### important points before running
1. to install all packages go to package.json and install all packages named in dependencis

### explaning the api's

1. http://localhost:8000/doctors/register → with name and password

2. http://localhost:8000/doctors/login → returns the JWT to be used

3. http://localhost:8000/patients/register -> with number
   note -> here we need to use jwt token for autentcation

4. http://localhost:8000/patients/:id/create_report -> id should be n formate lke "patientnum + COVID"

5. http://localhost:8000/patients/:id/all_reports → List all the reports of a patient oldest to latest
   (id  rules mentoned above)

6. http://localhost:8000/reports/:status  → List all the reports of all the patients filtered by a specific status



# Hospy
# Hospy
