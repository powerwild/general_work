class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []


    @property
    def value(self):
        return self._value


    @property
    def children(self):
        return self._children


    @property
    def parent(self):
        return self._parent

    @parent.setter
    def parent(self, parent_node):
        if parent_node == None:
            self._parent = parent_node
            return
        if self._parent == parent_node:
            return
        if not self._parent == None:
            self._parent.remove_child(self)
        self._parent = parent_node
        parent_node.add_child(self)

    def add_child(self, child_node):
        if not child_node in self._children:
            self._children.append(child_node)
            child_node.parent = self
            return True
        else:
            return False


    def remove_child(self, bad_node):
        if not bad_node in self._children:
            return False
        else:
            bad_node.parent = None
            self._children.remove(bad_node)
            return bad_node


    def depth_search(self, value):
        if self.value == value:
            return self
        if len(self.children) > 0:
            depth_list = []
            for child in self.children:
                depth_list.insert(0, child)
        else:
            return None
        curr_node = self
        while len(depth_list) > 0:
            curr_node = depth_list.pop()
            # print(curr_node)
            if curr_node.value == value:
                return curr_node
            if len(curr_node.children) > 0:
                new_children = []
                for child in curr_node.children:
                    new_children.insert(0, child)
                depth_list = depth_list + new_children
                # print(depth_list)
        return None


    def breadth_search(self, value):
        if self.value == value:
            return self
        breadth_list = [*self.children]
        curr_node = self
        while len(breadth_list) > 0:
            curr_node = breadth_list.pop(0)
            if curr_node.value == value:
                return curr_node
            if len(curr_node.children) > 0:
                breadth_list = [*breadth_list, *curr_node.children]
        return None


node_a = Node('a')
node_b = Node('b')
node_c = Node('c')
node_d = Node('d')
node_e = Node('e')
node_f = Node('f')
node_g = Node('g')
