from math import sqrt
from random import randint

class Triangle:
    """
    A class used to represent a right triangle

    Attributes
    ----------------------------------
    a: int
        length of side a
    b: int
        length of side b

    """
    def __init__(self,a,b):
        self.a = a
        self.b = b

    def __repr__(self):
        return f"Triangle(a={self.a}, b={self.b})"

    def __str__(self):
        return f"I am a triangle with sides of {self.a} and {self.b}"

    def __eq__(self,other):
        return self.a == other.a and self.b == other.b

    @classmethod
    def random(cls):
        """Class method which returns Triangle with random sides"""
        # cls is reference to the class Triangle
        return cls(randint(1,20),randint(1,20))

    # typing in self as a parameter because we want to access the variables that were set in the init method
    def get_hypot(self):
        """Calculates hypotenuse (3rd side of right triangle)"""
        # self.a and self.b will use the value that was passed when
        # __init__ was ran.
        return sqrt(self.a ** 2 + self.b ** 2)

    # typing in self as a parameter because we want to access the variables that were set in the init method
    def get_area(self):
        """Calculates area of right triangle"""
        return self.a * self.b / 2

    def describe(self):
        """returns string representing triangle"""
        return f"I am a triangle with sides: {self.a} & {self.b}"

# using the class method that we just defined
t = Triangle.random()
print(t)
print(t.a)
print(t.b)
print(t.get_area())
print(t.get_hypot())