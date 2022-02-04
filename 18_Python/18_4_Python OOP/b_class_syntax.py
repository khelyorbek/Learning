from math import sqrt

class Triangle:
    def __init__(self,a,b):
        self.a = a
        self.b = b

    # typing in self as a parameter because we want to access the variables that were set in the init method
    def get_hypot(self):
        # self.a and self.b will use the value that was passed when
        # __init__ was ran.
        return sqrt(self.a ** 2 + self.b ** 2)

    # typing in self as a parameter because we want to access the variables that were set in the init method
    def get_area(self):
        return self.a * self.b / 2

t = Triangle(3,4)
print(t)

print(t.get_hypot())

print(t.get_area())

t2 = Triangle(9,12)

print(t2)

print(t2.get_hypot())

print(t2.get_area())