# Comparisons O(n**2)
# swapping O(n**2)

def swapping(array, index1, index2):
  temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

def bubble_sort(array):
  n = len(array)
  for i in range(n - 1, 0, -1):
    for j in range(0, i):
      if array[j] > array[j + 1]:
        swapping(array, j, j + 1)
  return array

A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = bubble_sort(A)
print('Result: ', result)