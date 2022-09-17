def partition(array, low, high):
    pivot = array[low]
    i = low + 1
    j = high
    while True:
        while i <= j and array[i] <= pivot:
            i = i + 1
        while i <= j and array[j] > pivot:
            j = j - 1
        if i <= j:
            array[i], array[j] = array[j], array[i]
        else:
            break
    array[low], array[j] = array[j], array[low]
    return j


def quick_sort(array, low, high):
    if low < high:
        pivot = partition(array, low, high)
        quick_sort(array, low, pivot - 1)
        quick_sort(array, pivot + 1, high)
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = quick_sort(A, 0, len(A) - 1)
print('Result: ', result)
