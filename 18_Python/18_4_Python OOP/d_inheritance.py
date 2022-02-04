from c_class_methods import Triangle

class ColoredTriangle(Triangle):
    def __init__(self,a,b,color):
        # self.a = a
        # self.b = b
        # Instead of doing ^, we are using parent class' constructor that does the same thing
        super().__init__(a,b)
        self.color = color

    def describe(self):
        msg = super().describe()
        return msg + f"I am {self.colr}"