# It is basically having multiple recursive calls in one function

def calculate(n)
  if n > 0
    calculate(n - 1)
    k = n ** 2
    p k
    calculate(n - 1)
  end
end
calculate(3)