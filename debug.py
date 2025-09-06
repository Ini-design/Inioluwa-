import winsound
import time
def beep_alarm():
    for repeat in range(7):
        winsound.Beep(3000,500)
        winsound.Beep(6000,300)
    time_duration = int(input("duration in second = hours, minutes, seconds = 0, 0, 0"))
    for i in range(time_duration):
        print('\n'* 100)
    seconds += 1
    if seconds == 60:
        minutes += 1
        seconds = 0
    if minutes == 60:
        hours += 1
        minutes = 0
    print(str(hours) + ':' + str(minutes) + ':' + str(seconds))
    time.sleep(1)
if __name__ == '_main_':
    beep_alarm
        