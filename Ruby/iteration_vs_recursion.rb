# In this example we're comparing the iterative solution to the recursive solution!

# This is the iterative one
def calculate_itr(n)
	while n > 0
		k = n ** 2
		p k
		n = n - 1
  end
end

calculate_itr(4)

# This is the recursive one
def calculate_rec(n)
	if n > 0
		k = n ** 2
		p k
		calculate_rec(n - 1)
  end
end

calculate_rec(5)