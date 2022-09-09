def linear_search(array, key)
  index = 0
  while (index < array.length)
    if array[index] == key
      return index
    end
    index = index + 1
  end
  return -1
end
A = [84, 98, 47, 77, 9, 81]

found = linear_search(A, 77)
p "Resut: #{found}"