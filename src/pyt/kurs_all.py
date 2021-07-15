#!/usr/bin/env python3
import requests
import bs4
import re
import csv
import json

url_cours = requests.get('https://api.coincap.io/v2/assets') #запрос к сайту
soup_cours = bs4.BeautifulSoup(url_cours.text, "html.parser") #парсим текст с сайта
txt_cours = soup_cours.text

regex_cours1 = re.search(r'[^\{"data":](.+?)\].+$', txt_cours).group(0) #все кроме последнего
regex_cours2 = re.search(r'^.*?\]', regex_cours1).group(0)
cours = json.loads(regex_cours2.replace("'",'"'))

with open('data.csv', 'w') as f:
    writer = csv.DictWriter(
        f, fieldnames=list(cours[0].keys()), quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for i in cours:
        writer.writerow(i)


with open('/home/polina/my-app/src/inf/data.json', 'w') as f:
    #json.dump(cours, f)

