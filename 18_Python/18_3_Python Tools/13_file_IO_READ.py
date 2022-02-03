# opening file in read mode
# file var is now a file object
file = open("13_morse.txt","r")

# iterating over line by line

for line in file:
    print('Line is: ',line)


# To make sure that line by line and read() will both work, we need to seek the file back to the beginning like a VCR
file.seek(0)

# this is supposed to read the entire file. BUT it will return ''
# Because once you go through the fine line by line, you can't read it again
all_text = file.read()
file.close()