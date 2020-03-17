from flask import Flask, render_template, url_for
from mongoengine import *

connect('countries')

app = Flask(__name__)

class Country(Document):
    name = StringField()
    population = StringField()
    



@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    Country(name='New Zealand', population='5 million').save()
    Country(name='Australia', population='36 million').save()
    return render_template("index.html")

@app.route('/countries')
def getCountries():
    countries = Country.objects
    return countries.to_json()

@app.route('/countries/<country_name>', methods=['GET'])
def getCountryById(country_name):
    countries = Country.objects.get(name=country_name)
    return users.to_json()


@app.route("/inspiration")
def inspiration():
    return render_template("inspiration.html")

  

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	


