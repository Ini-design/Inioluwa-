import turtle
import time
screen = turtle.Screen()
screen.bgcolor('black')
screen.title('Bouncing ball Animation')
screen.setup(width = 600, height = 400)
 # create the ball
ball = turtle.Turtle()
ball.shape('circle')
ball.speed(0)
ball.penup()
ball.color('cyan')
dx = 2
dy = 2
while True:
    x, y = ball.position()
    ball.setx(x + dx)
    ball.sety(y + dy)

    if x > 290 or x < -290:
        dx *= -1
        ball.color('red' if ball.color()[0] == 'cyan'else 'cyan')
    if y > 190 or y < -190:
        dy *= -1
        ball.color('red' if ball.color()[0] == 'cyan'else 'cyan')

        time.sleep(0.01)
screen.mainloop()




