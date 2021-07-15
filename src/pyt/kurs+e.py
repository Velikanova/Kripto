#!/usr/bin/env python3
import requests
import bs4
import re
import csv
import json

# биткоин
url_eth = requests.get('https://api.coincap.io/v2/assets/ethereum/history?interval=d1') #запрос к сайту
soup_eth = bs4.BeautifulSoup(url_eth.text, "html.parser") #парсим текст с сайта
txt_eth = soup_eth.text

regex_eth1 = re.search(r'[^\{"data":](.+?)\].+$', txt_eth).group(0) #все кроме последнего
regex_eth2 = re.search(r'^.*?\]', regex_eth1).group(0)
eth = json.loads(regex_eth2.replace("'",'"'))

kurs = []
j=0
while j < len(eth):
    dat = eth[j].get('date')
    new_dat = dat.replace(dat, dat[:10])
    dict_dat = dict.fromkeys(['date'], new_dat)
    kur = eth[j]
    kur.update(dict_dat)
    kurs.append(kur)
    j = j + 1

with open('/home/polina/my-app/src/R/etc/etc.csv', 'w') as f:
    writer = csv.DictWriter(
        f, fieldnames=list(kurs[0].keys()), quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for i in kurs:
        writer.writerow(i)

with open('/home/polina/my-app/src/inf/etc.csv', 'w') as f:
    writer = csv.DictWriter(
        f, fieldnames=list(kurs[0].keys()), quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for i in kurs:
        writer.writerow(i)

#with open('eth_new.json', 'w') as f:
    #json.dump(kurs, f)
