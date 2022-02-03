# pip install forex-python

from forex_python.bitcoin import BtcConverter

b = BtcConverter()
print(b.get_latest_price('USD'))
print(b.get_latest_price('EUR'))
