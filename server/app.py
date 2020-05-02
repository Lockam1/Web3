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


#Route with reading csv file set up
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

@app.route('/csvtodb')
def csvtodb()
    for file in os.listdir(app.config['FILES_FOLDER']):
        filename = os.fsdecode(file)
        path = os.path.join(app.config['FILES_FOLDER'],filename)
        f = open(path)
        r = csv.DictReader(f) 
        d = list(r)
        for data in d:
            country = Country() # a blank placeholder country
            dict = {} # a blank placeholder data dict
            for key in data: # iterate through the header keys
                if key == "country":
                    # check if this country already exists in the db
                    
                    # if the country does not exist, we can use the new blank country we created above, and set the name
 
                    # if the country already exists, replace the blank country with the existing country from the db, and replace the blank dict with the current country's 
                    # data                
                else:
                    f = filename.replace(".csv","") # we want to trim off the ".csv" as we can't save anything with a "." as a mongodb field name
                    if f in dict: # check if this filename is already a field in the dict
                        dict[f][key] = data[key] # if it is, just add a new subfield which is key : data[key] (value)
                    else:
                        dict[f] = {key:data[key]} # if it is not, create a new object and assign it to the dict

                # add the data dict to the country

            # save the country

#Temporary route for populating countries database
@app.route('/popCountry')
def popCountry():
    #Hard coded adding to database
    Country(name='New Zealand', population='5 million', language='English').save() 
    Country(name='Australia', population='36 million', language='English').save()
    return render_template("index.html"), 200

#Route for testing database contents
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
    countries = Country.objects
    return render_template("ajax.html", value=countries), 200
 

  

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	


