class ContainerWater:
  def contained_brute(self, arr: list[int]) -> int:
    arr_len = len(arr)
    max_area = 0
    for x in arr:
      for y in arr[1:]:
        if y == x or arr.index(y) < arr.index(x):
          continue 
        area = min(x, y) * (arr.index(y) - arr.index(x))
        print("area: {} and x: {} and y: {}".format(area, x, y))
        if max_area < area:
          max_area = area
    return max_area


  def contained(self, arr: list[int]) -> int:
    i = 0
    j = len(arr) - 1
    max_area = 0
    while i < j:
      length = min(arr[i], arr[j])
      width = j - i
      area = length * width
      max_area = max(max_area,area)
      if arr[i] < arr[j]:
        i += 1
      else:
        j -= 1
    return max_area

# length is the minimum of the two chosen values from the array. 
# One is at starting and the other is in the end.
# then we should check if we move i by one the new minimum is bigger or not.
# Same for the j checking moving it by one.

obj = ContainerWater()

tried2 = [1, 9, 2, 4]
result2 = obj.contained(tried2)
print(result2)

tried = [1, 9, 2, 4]
result = obj.contained_brute(tried)
print(result)
