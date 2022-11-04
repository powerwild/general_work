from datetime import datetime


# def my_solution(n):
#     hmap = {}
#     for i in range(n+1):
#         for j in range(n+1):
#             hmap[str(i)+str(j)] = 0
#     hmap['00'] = 1
#     for step in range(1, n+1):
#         for prev in range(n+1):
#             hmap[str(step)+str(prev)] = hmap[str(step-1)+str(prev)]
#             if prev >= step:
#                 hmap[str(step)+str(prev)] += hmap[str(step-1)+str(prev-step)]
#     return hmap[str(n)+str(n)] - 1


# def ref_solution(n):
#     m = [[0 for i in range(n + 1)] for j in range(n + 1)]
#     m[0][0] = 1  # base case
#     for stair in range(1, n + 1):
# 	    for left in range(0, n + 1):
# 	        m[stair][left] = m[stair - 1][left]
# 	        if left >= stair:
# 	            m[stair][left] += m[stair - 1][left - stair]

#     return m[n][n] -1




#(17, 4)
#17 18 19 20
#21 22 23
#25 26
#29


# def queue_solution(start, length):
#     def bit(num):
#         x = num % 4
#         return num if x == 0 else 1 if x == 1 else num+1 if x == 2 else 0

#     xor = bit(start + (2 * (length - 1)))
#     if start >= 2:
#         xor ^= bit(start - 1)
#     for i in range(length - 2):
#         y = length - i - 2
#         z = start + (length * (i + 2) - 1)
#         xor ^= bit(y + z) ^ bit(z)
#     return xor
    # sum = None
    # curr = 0
    # l = length
    # while l > 0:
    #     if curr == l:
    #         start += (length - l)
    #         curr = 0
    #         l -= 1
    #         continue
    #     if sum == None:
    #         sum = start
    #     else:
    #         sum = sum^start
    #     curr += 1
    #     start += 1
    # return sum




# def pair_sentries(banana_list):
#     banana_list = sorted(banana_list, reverse=True)
#     length = len(banana_list)
#     hash_tab = {num: [] for num in banana_list}
#     i = 0
#     while True:
#         if len(banana_list) == 1:
#             break
#         n1 = banana_list[i]
#         n2 = banana_list[-1]
#         n3 = n1 + n2
#         while n2:
#             n1, n2 = n2, n1 % n2
#         isInf = bool(int(n3/n1) and (int(n3/n1) - 1))
#         if not banana_list[i] == banana_list[-1] and isInf:
#             hash_tab[banana_list[i]].append(banana_list[-1])
#             hash_tab[banana_list[-1]].append(banana_list[i])
#         i += 1
#         if i == len(banana_list) - 1:
#             i = 0
#             banana_list.pop()
#     i = 0
#     poss = len( hash_tab[ max( hash_tab, key=lambda key: len(hash_tab[key]) ) ] )
#     while len(hash_tab) >= 2 and poss >= 1:
#         s_node = min( hash_tab, key=lambda key: len(hash_tab[key]) )
#         m_poss = [len(hash_tab[ hash_tab[s_node][0] ]) + 1, 0]
#         for num in hash_tab[s_node]:
#             if len(hash_tab[num]) < m_poss[0]:
#                 m_poss = [len( hash_tab[num] ), num]
#             for j in range(len( hash_tab[num] )):
#                 if hash_tab[num][j] == s_node:
#                     del hash_tab[num][j]
#                     break
#         for num in hash_tab[m_poss[1]]:
#             for j in range(len( hash_tab[num] )):
#                 if hash_tab[num][j] == m_poss[1]:
#                     del hash_tab[num][j]
#                     break
#         del hash_tab[s_node]
#         del hash_tab[m_poss[1]]
#         i += 2
#         if len(hash_tab) > 1:
#             poss = len( hash_tab[ max( hash_tab, key=lambda key: len(hash_tab[key]) ) ] )
#     return length - i

# print(pair_sentries([1, 1]))
# print(pair_sentries([1, 7, 3, 21, 13, 19]))

# def get_breakpoints(n):
#     breakpoints = {}
#     done, even, p, q = False, True, 1,1
#     while not done:
#         if even:
#             if q <= n: breakpoints[q] = p
#             else: done = True

#         else:
#             if p <= n: breakpoints[p] = 2 * q
#             else: done = True

#         p, q = p + 2 * q, p + q
#         even = not even
#     return breakpoints
# def calc_cum_sums(end, keys, breakpoints, cum_sums):
#     cum_sum, loc, offset = 0,0,0
#     j = len(keys) - 1
#     while j >= 0:
#         key0 = keys[j]
#         stride = key0
#         while loc + stride <= end:
#             cum_sum += cum_sums[key0]
#             loc += stride
#             cum_sum += offset * stride
#             offset += breakpoints[key0]
#         j -= 1
#     return cum_sum

# def solution(str_n):
#     n = int(str_n)
#     breakpoints = get_breakpoints(n)
#     keys = sorted(breakpoints.keys())
#     cum_sums = {}

#     for i in range(len(keys)):

#         key = keys[i]
#         cum_sum = calc_cum_sums(key-1, keys[:i], breakpoints, cum_sums)
#         cum_sums[key] = cum_sum + breakpoints[key]
#     cum_sum = calc_cum_sums(n, keys, breakpoints, cum_sums)

#     return str(cum_sum)





# def my_solution(s):
#     num = int(s)
#     accum = sum(range(1, num + 1))
#     accum = int(accum * (2**(1/2)))
#     accum -= num // 2
#     return str(accum)

# def find_total(last, keys, separators, sums):
#     sum = 0
#     l = 0
#     v = 0
#     length = len(keys) - 1
#     while length >= 0:
#         key = keys[length]
#         while l + key <= last:
#             sum += sums[key]
#             l += key
#             sum += v * key
#             v += separators[key]
#         length -= 1
#     return sum

# def solution(s):
#     num = int(s)
#     separators = {}
#     curr = True
#     pivot = True
#     x, y = 1, 1
#     while curr:
#         if pivot:
#             if y <= num: separators[y] = x
#             else: curr = False
#         else:
#             if x <= num: separators[x] = y * 2
#             else: curr = False
#         x, y = x + (2 * y), x + y
#         pivot = False if pivot else True
#     keys = sorted(separators.keys())
#     sums = {}
#     for i in range(len(keys)):
#         key = keys[i]
#         sum = find_total(key - 1, keys[:i], separators, sums)
#         sums[key] = sum + separators[key]
#     sum = find_total(num, keys, separators, sums)
#     return str(sum)

# print(solution('5'))
# print(solution('77'))

# from decimal import Decimal, localcontext

# def solution(s):
#     n = Decimal(s)
#     with localcontext() as ctx:
#         ctx.prec = 102
#         r = Decimal(2).sqrt()
#         s = Decimal(2) + Decimal(2).sqrt()

#         def solve(n):
#             if n == 0:
#                 return 0
#             Brn = int(r * n)
#             Brns = int(Decimal(Brn) / s)

#             return (Brn * (Brn + 1)) / 2 - solve(Brns) - Brns * (Brns + 1)

#         return str(int(solve(n)))


# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
#         if not len(lists):
#             return None
#         if len(lists) < 2:
#             return lists[0]
#         all_nodes = []
#         while len(lists):
#             curr = lists[0]
#             while curr:
#                 all_nodes.append(curr)
#                 curr = curr.next
#             lists.pop(0)
#         sorted_nodes = sorted(all_nodes, key=lambda node: node.val)
#         if not len(sorted_nodes):
#             return None
#         new_head = sorted_nodes[0]
#         for i in range(len(sorted_nodes)):
#             if i < len(sorted_nodes) - 1:
#                 sorted_nodes[i].next = sorted_nodes[i+1]
#             else:
#                 sorted_nodes[i].next = None
#         return new_head
#!/usr/bin/env python3


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
