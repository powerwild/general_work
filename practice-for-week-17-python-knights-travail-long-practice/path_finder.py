from tree import Node



class KnightPathFinder:
    def __init__(self, coords):
        self._root = Node(coords)
        self._considered_positions = set(coords)


    def get_valid_moves(self, pos):
        valid_moves = []
        if pos[0] + 2 <= 8 and pos[1] + 1 <= 8:
            valid_moves.append((pos[0] + 2, pos[1] + 1))
        if pos[0] + 2 <= 8 and pos[1] - 1 >= 0:
            valid_moves.append((pos[0] + 2, pos[1] - 1))
        if pos[0] - 2 >= 0 and pos[1] + 1 <= 8:
            valid_moves.append((pos[0] - 2, pos[1] + 1))
        if pos[0] - 2 >= 0 and pos[1] - 1 >= 0:
            valid_moves.append((pos[0] - 2, pos[1] - 1))
        if pos[0] + 1 <= 8 and pos[1] + 2 <= 8:
            valid_moves.append((pos[0] + 1, pos[1] + 2))
        if pos[0] + 1 <= 8 and pos[1] - 2 >= 0:
            valid_moves.append((pos[0] + 1, pos[1] - 2))
        if pos[0] - 1 >= 0 and pos[1] + 2 <= 8:
            valid_moves.append((pos[0] - 1, pos[1] + 2))
        if pos[0] - 1 >= 0 and pos[1] - 2 >= 0:
            valid_moves.append((pos[0] - 1, pos[1] - 2))
        return valid_moves


    def new_move_positions(self, pos):
        moves = self.get_valid_moves(pos)
        moves = set(moves) - self._considered_positions
        self._considered_positions = self._considered_positions | moves
        return list(moves)


    def build_move_tree(self):
        start = self._root
        tree_nodes = [start]
        while len(tree_nodes) >= 1:
            curr_node = tree_nodes.pop(0)
            move_list = self.new_move_positions(curr_node.value)
            for move in move_list:
                new_node = Node(move)
                curr_node.add_child(new_node)
                tree_nodes.append(new_node)


    def find_path(self, end_pos):
        req_node = self._root.depth_search(end_pos)
        path = self.trace_to_root(req_node)
        return path


    def trace_to_root(self, end_node):
        trace = [end_node.value]
        curr_node = end_node
        while True:
            if not curr_node.parent == None:
                curr_node = curr_node.parent
                trace.insert(0, curr_node.value)
            else:
                break
        return trace


finder = KnightPathFinder((0, 0))
finder.build_move_tree()
print(finder.find_path((2, 1))) # => [(0, 0), (2, 1)]
print(finder.find_path((3, 3))) # => [(0, 0), (2, 1), (3, 3)]
print(finder.find_path((6, 2))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (6, 2)]
print(finder.find_path((7, 6))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (5, 5), (7, 6)]




# finder = KnightPathFinder((0, 0))
# finder.build_move_tree()
# print(finder._root.children)





# finder = KnightPathFinder((0, 0))
# print(finder.new_move_positions((0, 0)))   # Expected outcome: {(1, 2), (2, 1)}
