# O(n**2) comparison and time complexity
# O(n) swapping

def swapping(array, index1, index2):
    temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp


def selection_sort(array):
    n = len(array)
    for i in range(n - 1):
        position = i
        for j in range(i + 1, n):
            if array[j] < array[position]:
                position = j
        swapping(array, i, position)
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = selection_sort(A)
print('Result: ', result)
