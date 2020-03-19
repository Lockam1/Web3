from flask import Flask, render_template, url_for
from mongoengine import *
import os

connect('countries')

app = Flask(__name__)

app.config.from_object('config')

class Country(Document):
    name = StringField()
    population = StringField()
    



@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    # Country(name='New Zealand', population='5 million').save() Example adding to a db from here.
    # Country(name='Australia', population='36 million').save()
    for file in os.listdir(app.config['FILES_FOLDER']):
        filename = os.fsdecode(file)
        path = os.path.join(app.config['FILES_FOLDER'],filename)
        f = open(path)
        r = csv.reader(f)
        d = list(r)
        for data in d:
            print(data)
    

    return render_template("index.html")

@app.route('/countries')
def getCountries():
    countries = Country.objects
    return countries.to_json()

@app.route('/countries/<country_name>', methods=['GET'])
def getCountryById(country_name):
    countries = Country.objects(name=country_name)[0]
    return countries.to_json()


@app.route("/inspiration")
def inspiration():
    return render_template("inspiration.html")

  

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	


