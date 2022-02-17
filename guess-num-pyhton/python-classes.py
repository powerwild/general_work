class AngryBird:
    __slots__ = ['_x', '_y']
    def __init__(self, x=0, y=0):
        '''
        Construct a new AngryBird by setting its position to (0, 0).
        '''
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y =+ delta

    def move_right_by(self, alpha):
        self._x += alpha

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        if value < 0:
            value = 0
        self._x = value

    @property
    def y(self):
        return self.y

    @y.setter
    def y(self, value):
        if value < 0:
            value = 0
        self._y = value


    # Changes what gets printed when you print the class object
    def __repr__(self):
        return f'<AngryBird ({self._x}, {self._y})>'


chuck = AngryBird()
print(chuck)
print(chuck._y)
chuck.move_up_by(5)
print(chuck._x, chuck._y)



class Employee:
    def __init__(self, id):
        self.id = id

# Inheritance
class Manager(Employee):
    def __init__(self, id):
        # Inherit from Employee
        super().__init__(id)
        self.employees = []

    def add_direct_report(self, employee):
        self.employees.append(employee)


class Parent:
    def boop(self):
        print("I am Parent#boop")


class Child(Parent):
    def boop(self):
        print("I am Child#boop")
        super().boop()

# super().boop() carries over the functionality of the parent method
Child().boop()
# Prints
# "I am Child#boop"
# "I am Parent#boop"
