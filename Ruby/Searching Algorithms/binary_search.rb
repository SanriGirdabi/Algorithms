def binary_search_iterative(array, key)
  l = 0
  r = array.length - 1
  while (l <= r)
    mid = ((l + r) / 2).floor
    if (key == array[mid])
      return mid
    elsif (key < array[mid])
      r = mid - 1
    elsif (key > array[mid])
      l = mid + 1
    end
  end
  return -1
end

A = [85, 98, 43, 100, 43, 45, 56]
found = binary_search_iterative(A, 100)
p "Result: #{found}"

def binary_search_recursive(array, key, l, r)
  if (l > r)
    return -1
  else
    mid = ((l + r) / 2).floor
    if (key == array[mid])
      return mid
    elsif (key < A[mid])
      return binary_search_recursive(A, key, l, mid - 1)
    elsif (key > array[mid])
      return binary_search_recursive(A, key, mid + 1, r)
    end
  end
end

B = [85, 86, 87, 88, 89, 90, 91]
found2 = binary_search_recursive(B, 85, 0, 6)
p "Result: #{found2}"
