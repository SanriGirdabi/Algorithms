def linear_search(A, key):
    index = 0
    while index < len(A):
        if A[index] == key:
            return index
        index = index + 1
    return -1


A = [84, 98, 47, 77, 9, 81]

found = linear_search(A, 77)
print('Resut:', found)
