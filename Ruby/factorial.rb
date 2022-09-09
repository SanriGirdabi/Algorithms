# O(n) and it is using the memoization for performance

def factorial(n, memo = {})
  if (memo.has_value?(n))
    return memo[n]
  end
  if (n == 0)
    return 1
  end
  memo[n] = factorial(n - 1) * n
  return memo[n]
end

print 'Enter number: '
num = gets
n = num.to_i
p factorial(n)
