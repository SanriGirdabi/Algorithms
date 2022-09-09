def sum_of_n(n)
  if n == 0
    return 0
  end
  sum_of_n(n - 1) + n
end


print 'Enter number: '
num = gets
n = num.to_i
p sum_of_n(n)