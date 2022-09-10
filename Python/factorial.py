# O(n) and it is using the memoization for performance

def factorial(n, memo={}):
    if (n in memo):
        return memo[n]
    if n == 0:
        return 1
    memo[n] = factorial(n - 1) * n
    return memo[n]


num = input('Enter Number: ')
n = int(num)
print(factorial(n))
