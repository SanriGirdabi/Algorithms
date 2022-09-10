# Divide and conquer

from array import array


def merge(array, left, mid, right):
    i = left
    j = mid + 1
    k = left
    B = [0] * (right + 1)
    while i <= mid and j <= right:
        if array[i] < array[j]:
            B[k] = array[i]
            i = i + 1
        else:
            B[k] = array[j]
            j = j + 1
        k = k + 1
    while i <= mid:
        B[k] = array[i]
        i = i + 1
        k = k + 1
    while j <= right:
        B[k] = array[j]
        j = j + 1
        k = k + 1
    for x in range(left, right + 1):
        array[x] = B[x]


def merge_sort(array, left, right):
    if left < right:
        mid = (left + right) // 2
        merge_sort(array, left, mid)
        merge_sort(array, mid + 1, right)
        merge(array, left, mid, right)
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = merge_sort(A, 0, len(A) - 1)
print('Result: ', result)
