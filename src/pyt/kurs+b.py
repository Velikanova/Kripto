#!/usr/bin/env python3
import requests
import bs4
import re
import csv
import json

url_btc = requests.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1') #запрос к сайту
soup_btc = bs4.BeautifulSoup(url_btc.text, "html.parser") #парсим текст с сайта
txt_btc = soup_btc.text

regex_btc1 = re.search(r'[^\{"data":](.+?)\].+$', txt_btc).group(0) #все кроме последнего
regex_btc2 = re.search(r'^.*?\]', regex_btc1).group(0)
btc = json.loads(regex_btc2.replace("'",'"'))

kurs = []
j=0
while j < len(btc):
    dat = btc[j].get('date')
    new_dat = dat.replace(dat, dat[:10])
    dict_dat = dict.fromkeys(['date'], new_dat)
    kur = btc[j]
    kur.update(dict_dat)
    kurs.append(kur)
    j = j + 1

with open('/home/polina/my-app/src/R/bit/bit.csv', 'w') as f:
    writer = csv.DictWriter(
        f, fieldnames=list(kurs[0].keys()), quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for i in kurs:
        writer.writerow(i)

with open('/home/polina/my-app/src/inf/bit.csv', 'w') as f:
    writer = csv.DictWriter(
        f, fieldnames=list(kurs[0].keys()), quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for i in kurs:
        writer.writerow(i)
        
#with open('bit_new.json', 'w') as f:
    #json.dump(kurs, f)
