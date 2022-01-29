languages = {'ruby','python','javascript'}
# {'ruby','python','javascript'}

type(languages)
# set

languages = {'ruby','python','javascript','ruby'}
# {'ruby','python','javascript'}

voted_languages = ['ruby','python','js','scala','ruby','python','python','scala']
# ['ruby','python','js','scala','ruby','python','python','scala']

set(voted_languages)
# {'js','python','ruby','scala'}

# things = {2,'snake','mario','True',[1,2,3]}
# Will show an error because sets can only hold immutable types

things = {2,'snake','mario','True'}
# will work fine because they are all immutable