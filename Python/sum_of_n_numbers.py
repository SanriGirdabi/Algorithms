def sum_of_n(n):
    if n == 0:
        return 0
    return sum_of_n(n - 1) + n


num = input('Enter Number: ')
n = int(num)
print(sum_of_n(n))
