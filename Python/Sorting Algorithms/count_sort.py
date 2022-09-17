def count_sort(array):
    n = len(array)
    maxsize = max(array)
    carray = [0] * (maxsize + 1)

    for i in range(n):
        carray[array[i]] = carray[array[i]] + 1
    i = 0
    j = 0

    while i < maxsize + 1:
        if carray[i] > 0:
            array[j] = i
            j = j + 1
            carray[i] = carray[i] - 1
        else:
            i = i + 1
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = count_sort(A)
print('Result: ', result)
