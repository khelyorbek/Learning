# Prerequisites
# need to install a venv
# need to pip install Faker into the venv

from faker import Faker
fake = Faker()

for x in range(10):
    print(fake.name())
