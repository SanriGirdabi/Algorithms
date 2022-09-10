def binary_search_iterative(A, key):
    l = 0
    r = len(A) - 1
    while l <= r:
        mid = (l + r) // 2
        if key == A[mid]:
            return mid
        elif key < A[mid]:
            r = mid - 1
        elif key > A[mid]:
            l = mid + 1
    return -1


A = [85, 98, 43, 100, 43, 45, 56]
found = binary_search_iterative(A, 100)
print('Result', found)


def binary_search_recursive(A, key, l, r):
    if l > r:
        return -1
    else:
        mid = (l + r) // 2
        if key == A[mid]:
            return mid
        elif key < A[mid]:
            return binary_search_recursive(A, key, l, mid - 1)
        elif key > A[mid]:
            return binary_search_recursive(A, key, mid + 1, r)


B = [85, 86, 87, 88, 89, 90, 91]
found2 = binary_search_recursive(B, 85, 0, 6)
print('Result', found2)
