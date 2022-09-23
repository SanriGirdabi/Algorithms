class _Node:
  __slots__ = '_element', '_next'
  def __init__(self, element, next):
    self._element = element
    self._next = next
  
class LinkedList:
  def __init__(self):
    self._head = None
    self._tail = None
    self._size = 0

  def __len__(self):
    return self._size
  
  def is_empty(self):
    return self._size == 0

  def add_last(self, element):
    newest = _Node(element, None)
    if self.is_empty():
      self._head = newest
    else:
      self._tail._next = newest
    self._tail = newest
    self._size += 1

  def add_first(self, element):
    newest = _Node(element, None)
    if self.is_empty():
      self._head = newest
      self._tail = newest
    else:
      newest._next = self._head
      self._head = newest
    self._size += 1

  def add_to_position(self, element, position):
    newest = _Node(element, None)
    x = self._head
    i = 1
    if position == 0:
      self.add_first(element)
      return
    while i < position:
      x = x._next
      i = i + 1
    newest._next = x._next
    x._next = newest
    self._size += 1
  
  def display(self):
    elem = self._head
    while elem:
      print(elem._element, end= '-->')
      elem = elem._next
    print()

  def search(self, key):
    x = self._head
    index = 0
    while x:
      if x._element == key:
        return index
      x = x._next
      index += 1
    return -1
  
  def remove_first(self):
    if self.is_empty():
      print('The List is Empty')
      return
    elem = self._head._element
    self._head = self._head._next
    self._size -= 1
    if self.is_empty():
      self._tail = None
    return elem
  
  def remove_last(self):
    if self.is_empty():
      print('The List is Empty')
      return
    elem = self._head
    i = 1
    while i < len(self) - 1:
      elem = elem._next
      i += 1
    self._tail = elem
    elem = elem._next
    e = elem._element
    self._tail._next = None
    self._size -= 1
    return e
  
  def remove_any(self, position):
    if position == 0:
      self.remove_first()
      return
    p = self._head
    i = 1
    while i < position:
      p = p._next
      i += 1
    e = p._next._element
    p._next = p._next._next
    self._size -= 1
    return e

L = LinkedList()
L.add_last(9)
L.add_last(5)
L.add_last(20)
L.add_last(25)
L.add_last(37)
L.add_last(38)
print('The element at:', L.search(5), 'position')
L.add_first(18)
L.add_to_position(4, 2)
L.remove_first()
L.remove_last()
L.remove_any(3)
print('Size:', L.__len__())
L.display()