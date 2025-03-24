# Pyton Virtual Enviroment
## We create virtual enviroment so we could manage our dependencies completely isolated from our machine

### List of commands for windows
```
python -m venv venv
.\venv\Scripts\activate
```

## Flask For Backend
```
pip install flask flask-sqlalchemy flask-cors
```
####  "flask" for backend for creating rest Api's
####  "flask-sqlalchemy" is ORM 
####  "flask-cors" is for not getting cors-errors

## Flask app enviroment variable
```
set FLASK_APP=app.py
set FLASK_ENV=development
```

## Use this to run the app
```
flask run
```

## Use this to run the app without reload
```
flask run --reload
```

## create a "vsgi.py" file inside backend folder

## run this command inside backend folder
```
pip freeze > requirements.txt
```
#### it will create a requirement.txt file


```
pip install -r requirements.txt && cd ../frontend && npm install build
