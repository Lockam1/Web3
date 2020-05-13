from flask import Flask, render_template, url_for, request, json
from mongoengine import *
import os
import csv

#DB set up
connect('Web3')
app = Flask(__name__)
app.config.from_object('config')

class Csv1(Document):  #Setting up fields needed for the database additions  
    name = StringField()
    data = DictField()
class Csv2(Document):  #Setting up fields needed for the database additions  
    name = StringField()
    data = DictField()
class Csv3(Document):  #Setting up fields needed for the database additions  
    name = StringField()
    data = DictField()

#==========
#Main pages
#==========

#Index
@app.route('/')
@app.route('/home')
@app.route('/index')
def index():
    return render_template("index.html"), 200
#Inspriation
@app.route('/inspiration')
def inspiration():
    return render_template("inspiration.html"), 200
#Ajax
@app.route('/ajax')
def ajax():
    return render_template("ajax.html"), 200
#D3
@app.route('/d3')
def d3():
    return render_template("d3.html"), 200

#==================
#File saving routes
#==================

#Onetime for saving the csv file data to collections in Mongodb
@app.route('/csvtodb')
def csvtodb():
    count = 0
    for file in os.listdir(app.config['FILES_FOLDER']):
        # count += 1
        # print(count)
        filename = os.fsdecode(file)
        path = os.path.join(app.config['FILES_FOLDER'],filename)
        f = open(path)
        r = csv.DictReader(f) 
        d = list(r)
        if count == 0:#Csv file 1 reading and saving
            for data in d:          
                country = Csv1() # a blank placeholder country
                dict = {} # a blank placeholder data dict
                print(data)
                for key in data: # iterate through the header keys
                    if key == "country":
                        if not checkCSV1Exsist(country):
                            country.name = data[key]
                        # If the name wasnt it adds it here?
                        else: 
                            country = Csv1.query.filter_by(name=data[key]).first()
                            dict = country.data
                            # if the country already exists, replace the blank country with the existing country from the db, and replace the blank dict with the current country's 
                            # data                
                    else:
                        f = filename.replace(".csv","") # we want to trim off the ".csv" as we can't save anything with a "." as a mongodb field name
                        if f in dict: # check if this filename is already a field in the dict
                            dict[f][key] = data[key] # if it is, just add a new subfield which is key : data[key] (value)
                        else:
                            dict[f] = {key:data[key]} # if it is not, create a new object and assign it to the dict

                    # add the data dict to the country
                    country.data = dict
                # save the country
                country.save()
        elif count == 1:#Csv file 2 reading and saving
            for data in d:  
                country = Csv2() # a blank placeholder country
                dict = {} # a blank placeholder data dict
                print(data)
                for key in data: # iterate through the header keys
                    if key == "country":
                        if not checkCSV2Exsist(country):
                            country.name = data[key]
                        # If the name wasnt it adds it here?
                        else: 
                            country = Csv2.query.filter_by(name=data[key]).first()
                            dict = country.data
                            # if the country already exists, replace the blank country with the existing country from the db, and replace the blank dict with the current country's 
                            # data                
                    else:
                        f = filename.replace(".csv","") # we want to trim off the ".csv" as we can't save anything with a "." as a mongodb field name
                        if f in dict: # check if this filename is already a field in the dict
                            dict[f][key] = data[key] # if it is, just add a new subfield which is key : data[key] (value)
                        else:
                            dict[f] = {key:data[key]} # if it is not, create a new object and assign it to the dict

                    # add the data dict to the country
                    country.data = dict
                # save the country
                country.save()
        elif count == 2:#Csv file 3 reading and saving
            for data in d:  
                country = Csv3() # a blank placeholder country
                dict = {} # a blank placeholder data dict
                print(data)
                for key in data: # iterate through the header keys
                    if key == "country":
                        if not checkCSV3Exsist(country):
                            country.name = data[key]
                        # If the name wasnt it adds it here?
                        else: 
                            country = Csv3.query.filter_by(name=data[key]).first()
                            dict = country.data
                            # if the country already exists, replace the blank country with the existing country from the db, and replace the blank dict with the current country's 
                            # data                
                    else:
                        f = filename.replace(".csv","") # we want to trim off the ".csv" as we can't save anything with a "." as a mongodb field name
                        if f in dict: # check if this filename is already a field in the dict
                            dict[f][key] = data[key] # if it is, just add a new subfield which is key : data[key] (value)
                        else:
                            dict[f] = {key:data[key]} # if it is not, create a new object and assign it to the dict

                    # add the data dict to the country
                    country.data = dict
                # save the country
                country.save()
            # dict = {} # a blank placeholder data dict
            # print(data)
            # for key in data: # iterate through the header keys
            #     if key == "country":
            #         if not checkCountryExsist(country):
            #             country.name = data[key]
            #         # If the name wasnt it adds it here?
            #         else: 
            #             country = Csv1.query.filter_by(name=data[key]).first()
            #             dict = country.data
            #             # if the country already exists, replace the blank country with the existing country from the db, and replace the blank dict with the current country's 
            #             # data                
            #     else:
            #         f = filename.replace(".csv","") # we want to trim off the ".csv" as we can't save anything with a "." as a mongodb field name
            #         if f in dict: # check if this filename is already a field in the dict
            #             dict[f][key] = data[key] # if it is, just add a new subfield which is key : data[key] (value)
            #         else:
            #             dict[f] = {key:data[key]} # if it is not, create a new object and assign it to the dict

            #     # add the data dict to the country
            #     country.data = dict
            # # save the country
            # country.save()
        count += 1
        print(count)   
    return 'Success', 200   
#Routes to pass the data to the ajax funtions
@app.route('/csv1')
def csv1():
    return Csv1.objects.to_json(), 200
@app.route('/csv2')
def csv2():
    return Csv2.objects.to_json(), 200
@app.route('/csv3')
def csv3():
    return Csv3.objects.to_json(), 200

#=============
#Tesing routes
#=============

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
#Testing selecting on country
@app.route('/countries/<country_name>', methods=['GET'])
def getCountryById(country_name):
    countries = Country.objects(name=country_name)[0]
    return countries.to_json()
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


#Makeing sure there are no duplicates when adding to the database by checking if it already exists
def checkCSV1Exsist(c):
    return any(Csv1.name is c for c in Csv1.objects)
def checkCSV2Exsist(c):
    return any(Csv2.name is c for c in Csv2.objects)
def checkCSV3Exsist(c):
    return any(Csv3.name is c for c in Csv3.objects)

if __name__ =="__main__":
    app.run(host='0.0.0.0', port=80)
	