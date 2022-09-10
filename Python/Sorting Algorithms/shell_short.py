def shell_short(array):
    n = len(array)
    gap = n // 2
    while gap > 0:
        i = gap
        while i < n:
            temp = array[i]
            j = i - gap
            while j >= 0 and array[j] > temp:
                array[j + gap] = array[j]
                j = j - gap
            array[j + gap] = temp
            i = i + 1
        gap = gap // 2
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = shell_short(A)
print('Result: ', result)
