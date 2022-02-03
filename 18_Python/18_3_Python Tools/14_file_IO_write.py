# Dictionary representing the morse code chart
# Source: https://stackoverflow.com/questions/32094525/morse-code-to-english-python3
def morse_to_letter(code):
    CODE_reversed = {'..-.': 'F', '-..-': 'X',
                 '.--.': 'P', '-': 'T', '..---': '2',
                 '....-': '4', '-----': '0', '--...': '7',
                 '...-': 'V', '-.-.': 'C', '.': 'E', '.---': 'J',
                 '---': 'O', '-.-': 'K', '----.': '9', '..': 'I',
                 '.-..': 'L', '.....': '5', '...--': '3', '-.--': 'Y',
                 '-....': '6', '.--': 'W', '....': 'H', '-.': 'N', '.-.': 'R',
                 '-...': 'B', '---..': '8', '--..': 'Z', '-..': 'D', '--.-': 'Q',
                 '--.': 'G', '--': 'M', '..-': 'U', '.-': 'A', '...': 'S', '.----': '1'}
    return CODE_reversed.get(code,'')

def get_english(phrase):
    letters = phrase.split(' ')
    return "".join([morse_to_letter(letter) for letter in letters])

input_file = open('13_morse.txt','r')
output_file = open('14_translated.txt','w')

for line in input_file:
    output_file.write(get_english(line))

input_file.close()
output_file.close()
