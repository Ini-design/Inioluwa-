import turtle
turtle.speed(3)
turtle.bgcolor('black')
turtle.pensize(3)
def func():
    for i in range(200):
        turtle.right(1)
        turtle.forward(1)
turtle.color('red', 'pink')
turtle.begin_fill()
turtle.left(140)
turtle.forward(111.46)
func()
turtle.left(120)
func()
turtle.forward(111.46)
turtle.begin_fill()
turtle.hideturtle()
turtle.done()

