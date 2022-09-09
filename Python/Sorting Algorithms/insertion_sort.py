# O(n**2) comparisons
# O(n**2) swapping

def insertion_sort(array):
  n = len(array)
  for i in range(1, n):
    current_value = array[i]
    position = i
    while position > 0 and array[position - 1] > current_value:
      array[position] = array[position - 1]
      position = position - 1
    array[position] = current_value
  return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = insertion_sort(A)
print('Result: ', result)