numbers = [10, 7, 5, 4, 8]
numbers.append(12)
numbers.remove(5)
mainimum = numbers[3]
for number in numbers:
    if number < mainimum:
        mainimum = number
print(mainimum)
