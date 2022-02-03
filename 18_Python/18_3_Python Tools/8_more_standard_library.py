from colorsys import rgb_to_hls
import imp
rgb_to_hls(255,0,30)

import calendar
cal = calendar.TextCalendar()
cal.prmonth(2025,4)

#      April 2025
# Mo Tu We Th Fr Sa Su
#     1  2  3  4  5  6
#  7  8  9 10 11 12 13
# 14 15 16 17 18 19 20
# 21 22 23 24 25 26 27
# 28 29 30

import webbrowser
url = 'http://docs.python.org'
# webbrowser.open_new_tab(url)

# Tk interface is used to create GUI applications. Will not learn it but you can later.

from turtle import *
color('red','yellow')
begin_fill()
while True:
    forward(150)
    left(170)
    if abs(pos()) < 1:
        break
end_fill()
done()

