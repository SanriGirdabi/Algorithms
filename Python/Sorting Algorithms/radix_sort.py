def radix_sort(array):
    n = len(array)
    max_element = max(array)
    digits = len(str(max_element))
    l = []
    bins = [l] * 10

    for i in range(digits):
        for j in range(n):
            e = int((array[j] / pow(10, i)) % 10)
            if len(bins[e]) > 0:
                bins[e].append(array[j])
            else:
                bins[e] = [array[j]]
        k = 0
        for x in range(10):
            if len(bins[x]) > 0:
                for y in range(len(bins[x])):
                    array[k] = bins[x].pop(0)
                    k = k + 1
    return array


A = [23, 47, 89, 128, 49, 13, 52, 79, 88, 68]
result = radix_sort(A)
print('Result: ', result)
