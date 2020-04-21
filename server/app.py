from flask import Flask, render_template, url_for, request, json
from mongoengine import *
import os
import csv

connect('countries')

app = Flask(__name__)

app.config.from_object('config')

# class Country(Document):  Setting up fields needed for the database additions
#     name = StringField()
#     population = StringField()
    



@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    # Country(name='New Zealand', population='5 million').save() Example adding to a db from here.
    # Country(name='Australia', population='36 million').save()
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
def inspiration():
    return render_template("ajax.html"), 200


  

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	


