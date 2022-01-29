languages = {'javascript','python','ruby'}

'scala' in languages
# False

'ruby' in languages
# True

languages.add('scala')
# {'javascript','python','ruby','scala'}

languages.add('scala')
# Nothing is added in cause scala already exists

languages.pop()
# 'scala'
# {'javascript','python','ruby'}
# No argument needed
# Removes and return an arbitrary item

languages.remove('python')
# {'javascript','ruby'}

len(languages)
# 2

languages.add('C')
# {'javascript','ruby','C'}

languages.add('Java')
# {'javascript','ruby','C','Java'}

len(languages)
# 4

languages.remove('Java')
# {'javascript','ruby','C'}

copy = languages.copy()
copy
# # {'javascript','ruby','C'}

copy == languages
# True

copy is languages
# False

languages.clear()
languages
# {}