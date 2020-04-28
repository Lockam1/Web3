from flask import Flask, render_template, url_for, request, json
from mongoengine import *
import os
import csv

connect('Web3')

app = Flask(__name__)

app.config.from_object('config')

class Country(Document):  #Setting up fields needed for the database additions
     name = StringField()
     population = StringField()
     language = StringField()
    



@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    
    return render_template("index.html"), 200

@app.route('/data')
def showData():
    temp = []
    for file in os.listdir(app.config['FILES_FOLDER']):
        filename = os.fsdecode(file)
        path = os.path.join(app.config['FILES_FOLDER'],filename)
        f = open(path)
        r = csv.reader(f)
        d = list(r)
        temp.append(d)
    return render_template("index.html", value=temp), 200

#Temporary route for populating countries database
@app.route('/popCountry')
def index():
    #Hard coded adding to database
    Country(name='New Zealand', population='5 million', language='English').save() 
    Country(name='Australia', population='36 million', language='English').save()

@app.route('/countries')
def getCountries():
    countries = Country.objects
    return countries.to_json()

@app.route('/countries/<country_name>', methods=['GET'])
def getCountryById(country_name):
    countries = Country.objects(name=country_name)[0]
    return countries.to_json()


@app.route('/inspiration')
def inspiration():
    return render_template("inspiration.html"), 200

@app.route('/ajax')
def ajax():
    return render_template("ajax.html"), 200
 

  

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	


