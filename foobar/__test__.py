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


# class Solution(object):
#     def runningSum(self, nums):
#         for i in range(1, len(nums)):
#             nums[i] = nums[i-1] + nums[i]
#         return nums


# class Solution(object):
#     def pivotIndex(self, nums):
#         if len(nums) < 3: return -1
#         total = 0
#         for i in range(len(nums)):
#             total += nums[i]
#         l_sum = 0
#         for j in range(len(nums)):
#             total -= nums[j]
#             if total == l_sum: return j
#             l_sum += nums[j]
#         return -1


# class Solution(object):
#     def isIsomorphic(self, s, t):
#         s_map = dict()
#         t_map = dict()
#         for i in range(len(s)):
#             if not s_map.get(s[i]):
#                 s_map[s[i]] = str(i)
#             else: s_map[s[i]] += str(i)
#             if not t_map.get(t[i]):
#                 t_map[t[i]] = str(i)
#             else: t_map[t[i]] += str(i)
#         print(s_map)
#         print(t_map)
#         for j in range(len(t)):
#             if s_map[s[j]] != t_map[t[j]]:
#                 return False
#         return True


# class Solution(object):
#     def isSubsequence(self, s, t):
#         s_index = 0
#         for i in range(len(t)):
#             if s_index < len(s) and s[s_index] == t[i]:
#                 s_index += 1
#         return s_index >= len(s)


# class Solution(object):
#     def mergeTwoLists(self, list1, list2):
#         if not list1: return list2
#         if not list2: return list1
#         new_head = ListNode()
#         curr = new_head
#         while list1 and list2:
#             if list1.val <= list2.val:
#                     curr.next = list1
#                     list1 = list1.next
#             else:
#                 curr.next = list2
#                 list2 = list2.next
#             curr = curr.next
#         if list1:
#             curr.next = list1
#         if list2:
#             curr.next = list2
#         return new_head.next


# class Solution(object):
#     def reverseList(self, head):
#         if not head or not head.next: return head
#         prev = head
#         curr = head.next
#         next = curr.next
#         prev.next = None
#         while next:
#             curr.next = prev
#             prev = curr
#             curr = next
#             next = next.next
#         curr.next = prev
#         return curr


# class Solution(object):
#     def middleNode(self, head):
#         if not head.next: return head
#         curr = head
#         num_of_nodes = 0
#         while curr:
#             num_of_nodes += 1
#             curr = curr.next
#         middle = num_of_nodes // 2
#         curr = head
#         while middle > 0:
#             middle -= 1
#             curr = curr.next
#         return curr


# class Solution(object):
#     def detectCycle(self, head):
#         nodes = set()
#         while head:
#             if head in nodes:
#                 return head
#             else:
#                 nodes.add(head)
#             head = head.next
#         return None


# class Solution(object):
#     def maxProfit(self, prices):
#         profit = 0
#         max = prices[-1]
#         for i in range(len(prices)-2, -1, -1):
#             if prices[i] > max:
#                 max = prices[i]
#             else:
#                 new_profit = max - prices[i]
#                 profit = new_profit if new_profit > profit else profit
#         return profit


# class Solution(object):
#     def longestPalindrome(self, s):
#         chars = set()
#         for i in range(len(s)):
#             if s[i] in chars:
#                 chars.remove(s[i])
#             else:
#                 chars.add(s[i])
#         extras = len(chars) - 1 if len(chars) > 0 else 0
#         return len(s) - extras


# class Solution(object):
#     def preorder(self, root):
#         if not root: return root
#         vals = list()
#         nodes = [root]
#         while len(nodes):
#             curr = nodes.pop()
#             vals.append(curr.val)
#             for i in range(len(curr.children)-1, -1):
#                 nodes.append(curr.children[i])
#         return vals


# class Solution(object):
#     def levelOrder(self, root):
#         if not root: return root
#         levels = list()
#         nodes = [[root]]
#         while len(nodes):
#             this_level = list()
#             children = list()
#             currs = nodes.pop(0)
#             for node in currs:
#                 this_level.append(node.val)
#                 if node.left: children.append(node.left)
#                 if node.right: children.append(node.right)
#             levels.append(this_level)
#             if len(children): nodes.append(children)
#         return levels


# class Solution(object):
#     def search(self, nums, target):
#         l = 0
#         if nums[l] == target: return l
#         r = len(nums) - 1
#         if nums[r] == target: return r
#         m = len(nums) // 2
#         if nums[m] == target: return m
#         while m != l and m != r:
#             if nums[m] < target:
#                 l = m
#             elif nums[m] > target:
#                 r = m
#             else:
#                 break
#             m = l + ((r - l) // 2)
#         return m if nums[m] == target else -1


# class Solution(object):
#     def firstBadVersion(self, n):
#         if n == 1:
#             return n
#         v = 1
#         while v < n:
#             m = (n + v) // 2
#             if isBadVersion(m):
#                 n = m
#             else:
#                 v = m +1
#         return v

# def gather(arr, temp, index, max_index):
#     while index <= max_index:
#         temp.append(arr[index])
#         index += 1
#     return
# def mergeSort(lst, start, end):
#     if start == end: return
#     mid = start + ((end - start) // 2)
#     mergeSort(lst, start, mid)
#     mergeSort(lst, mid+1, end)
#     i = start
#     j = mid + 1
#     temp_lst = list()
#     while i <= mid and j <= end:
#         if lst[i] <= lst[j]:
#             temp_lst.append(lst[i])
#             i += 1
#         else:
#             temp_lst.append(lst[j])
#             j += 1
#     gather(lst, temp_lst, i, mid)
#     gather(lst, temp_lst, j, end)
#     lst[start:end+1] = temp_lst
#     return


# class Solution(object):
#     def isValidBST(self, root):
#         def traverse(node, smaller, larger):
#             if not node:
#                 return True
#             for s in smaller:
#                 if node.val <= s.val:
#                     return False
#             for l in larger:
#                 if node.val >= l.val:
#                     return False
#             return traverse(node.left, smaller, larger+[node]) and traverse(node.right, smaller+[node], larger)
#         return traverse(root, [], [])


# class Solution(object):
#     def lowestCommonAncestor(self, root, p, q):
#         if not root or root.val == p.val or root.val == q.val:
#             return root
#         l = self.lowestCommonAncestor(root.left, p, q)
#         r = self.lowestCommonAncestor(root.right, p, q)
#         if l and r:
#             return root
#         elif l:
#             return l
#         else:
#             return r


# class Solution(object):
#     def searchInsert(self, nums, target):
#         if target <= nums[0]:
#             return 0
#         l = 0
#         r = len(nums) - 1
#         if target > nums[r]:
#             return r+1
#         while l+1 < r:
#             m = l + ((r - l) // 2)
#             if nums[m] < target:
#                 l = m
#             else:
#                 r = m
#         return r


# class Solution(object):
#     def containsDuplicate(self, nums):
#         unique = set(nums)
#         return len(unique) != len(nums)


# class Solution(object):
#     def maxSubArray(self, nums):
#         for i in range(1, len(nums)):
#             sub_sum = nums[i] + nums[i-1]
#             if sub_sum <= nums[i]:
#                 continue
#             else:
#                 nums[i] = sub_sum
#         return max(nums)


# class Solution(object):
#     def countOdds(self, low, high):
#         even = 0
#         odd = 0
#         if low % 2 == 0:
#             even += 1
#         else:
#             odd += 1
#         return ((high - low + even) // 2) + odd


# class Solution(object):
#     def average(self, salary):
#         max = float('-inf')
#         min = float('inf')
#         divisor = len(salary) - 2
#         sum = 0
#         for sal in salary:
#             if sal < min:
#                 min = sal
#             if sal > max:
#                 max = sal
#             sum += sal
#         sum -= (max + min)
#         return float(sum) / divisor


# class Solution(object):
#     def floodFill(self, image, sr, sc, color):
#         target = image[sr][sc]
#         stack = [[sr, sc]]
#         visited = set()
#         while len(stack):
#             r, c = stack.pop()
#             image[r][c] = color
#             visited.add('{0}-{1}'.format(r, c))
#             if r > 0 and image[r-1][c] == target and '{0}-{1}'.format(r-1, c) not in visited:
#                 stack.append([r-1, c])
#             if r < len(image)-1 and image[r+1][c] == target and '{0}-{1}'.format(r+1, c) not in visited:
#                 stack.append([r+1, c])
#             if c > 0 and image[r][c-1] == target and '{0}-{1}'.format(r, c-1) not in visited:
#                 stack.append([r, c-1])
#             if c < len(image[r])-1 and image[r][c+1] == target and '{0}-{1}'.format(r, c+1) not in visited:
#                 stack.append([r, c+1])
#         return image


# class Solution(object):
#     def numIslands(self, grid):
#         def isGoodCoords(grid, x, y, vis):
#             if x < 0 or x >= len(grid):
#                 return False
#             if y < 0 or y >= len(grid[x]):
#                 return False
#             if grid[x][y] == '0':
#                 return False
#             if '{0}-{1}'.format(x, y) in vis:
#                 return False
#             return True

#         def addCoords(lst, x, y, vis):
#             lst.append([x, y])
#             vis.add('{0}-{1}'.format(x, y))

#         visited = set()
#         islands = 0
#         for r in range(len(grid)):
#             for c in range(len(grid[r])):
#                 if isGoodCoords(grid, r, c, visited):
#                     stack = []
#                     addCoords(stack, r, c, visited)
#                     while len(stack):
#                         row, col = stack.pop()
#                         if isGoodCoords(grid, row+1, col, visited):
#                             addCoords(stack, row+1, col, visited)

#                         if isGoodCoords(grid, row-1, col, visited):
#                             addCoords(stack, row-1, col, visited)

#                         if isGoodCoords(grid, row, col+1, visited):
#                             addCoords(stack, row, col+1, visited)

#                         if isGoodCoords(grid, row, col-1, visited):
#                             addCoords(stack, row, col-1, visited)
#                     islands += 1
#         return islands


# class Solution(object):
#     def fib(self, n):
#         num = 1
#         prev = 0
#         temp = 0
#         curr = 1
#         while num < n:
#             temp = curr
#             curr += prev
#             prev = temp
#             num += 1
#         return 0 if n == 0 else curr


# class Solution(object):
#     def climbStairs(self, n):
#         uniqueWays = 1
#         increment = 1
#         for i in range(1, n):
#             prev = uniqueWays
#             uniqueWays += increment
#             increment = prev
#         return uniqueWays


# class Solution(object):
#     def minCostClimbingStairs(self, cost, price=0, index=0):
#         l = len(cost)
#         end = cost[l-1]
#         next = cost[l-2]
#         for i in range(l-3, -1, -1):
#             prev = next
#             next = min(next, end) + cost[i]
#             end = prev
#         return min(end, next)


# class Solution(object):
#     def uniquePaths(self, m, n):
#         def traverse(m, n, r, c, memo):
#             key = '{0}-{1}'.format(r, c)
#             if key in memo:
#                 return memo[key]
#             if m-1 == r and n-1 == c:
#                 return 1
#             if m == r or n == c:
#                 return 0
#             right = traverse(m, n, r, c+1, memo)
#             down = traverse(m, n, r+1, c, memo)
#             memo[key] = right + down
#             return memo[key]
#         d = dict()
#         return traverse(m, n, 0, 0, d)


# class Solution(object):
#     def findAnagrams(self, s, p):
#         def is_anagram(d1, d2):
#             if len(d1) != len(d2):
#                 return False
#             for k, v in d2.items():
#                 if not d1.get(k) or d1[k] != v:
#                     return False
#             return True
#         def remove_char(obj, key):
#             obj[key] -= 1
#             if obj[key] == 0:
#                 del obj[key]
#         def add_char(obj, key):
#             if obj.get(key):
#                 obj[key] += 1
#             else:
#                 obj[key] = 1

#         need = dict()
#         have = dict()

#         for char in p:
#             add_char(need, char)

#         l = 0
#         r = len(p) - 1
#         indeces = list()

#         for i in range(r):
#             add_char(have, s[i])

#         while r < len(s):
#             add_char(have, s[r])
#             if is_anagram(need, have):
#                 indeces.append(l)
#             remove_char(have, s[l])
#             l += 1
#             r += 1
#         return indeces

# from collections import defaultdict as ddict
# class Solution(object):
#     def characterReplacement(self, s, k):
#         # def is_valid(map, num):
#         #     largest = 0
#         #     sum = 0
#         #     for v in map.values():
#         #         largest = max(largest, v)
#         #         sum += v
#         #     sum -= largest
#         #     return sum <= num
#         chars = ddict(int)
#         l = 0
#         longest = 0
#         most_prolific = 0
#         for r in range(len(s)):
#             chars[s[r]] += 1
#             most_prolific = max(most_prolific, chars[s[r]])
#             while (r - l + 1) - most_prolific > k:
#                 chars[s[l]] -= 1
#                 l += 1
#             longest = max(longest, r-l+1)
#         return longest


# class Solution(object):
#     def twoSum(self, nums, target):
#         need = dict()
#         results = list()
#         for i in range(len(nums)):
#             if target-nums[i] in need:
#                 results = [need[target-nums[i]], i]
#                 break
#             else:
#                 need[nums[i]] = i
#         return results


# class Solution(object):
#     def getHint(self, secret, guess):
#         bulls = 0
#         cows = 0
#         secret_map = dict()
#         guess_map = dict()
#         for i in range(len(secret)):
#             if secret[i] == guess[i]:
#                 bulls += 1
#             else:
#                 secret_map[secret[i]] = secret_map[secret[i]]+1 if secret_map.get(secret[i]) else 1
#                 guess_map[guess[i]] = guess_map[guess[i]]+1 if guess_map.get(guess[i]) else 1
#         for k, v in guess_map.items():
#             if k in secret_map:
#                 cows += min(secret_map[k], v)
#         return '{0}A{1}B'.format(bulls, cows)


# class Solution(object):
#     def backspaceCompare(self, s, t):
#         new_s = ''
#         for i in range(len(s)):
#             if s[i] == '#':
#                 new_s = new_s[:-1]
#             else:
#                 new_s += s[i]
#         new_t = ''
#         for i in range(len(t)):
#             if t[i] == '#':
#                 new_t = new_t[:-1]
#             else:
#                 new_t += t[i]
#         return new_s == new_t


# class Solution(object):
#     def decodeString(self, s):
#         decoded = ''
#         r = 0
#         diff = None
#         temp = ''
#         while r < len(s)-1:
#             if s[r].isdigit() and diff == None:
#                 diff = int(s[r])
#             elif s[r].isdigit():
#                 temp += self.decodeString(s[r:-1])
#             elif s[r].isalpha():
#                 temp += s[r]
#             elif s[r] == ']':
#                 decoded += temp*diff
#                 diff = None
#                 temp = ''
#             r += 1
#         return decoded
# s = Solution()


# class Solution(object):
#     def intersect(self, nums1, nums2):
#         n1_dic = dict()
#         n2_dic = dict()
#         for num in nums1:
#             n1_dic[num] = n1_dic.get(num, 0) + 1
#         for num in nums2:
#             n2_dic[num] = n2_dic.get(num, 0) + 1
#         results = list()
#         for key in n2_dic.keys():
#             while n1_dic.get(key, 0) > 0 and n2_dic[key] > 0:
#                     results.append(key)
#                     n1_dic[key] -= 1
#                     n2_dic[key] -= 1
#         return results


# class Solution(object):
#     def matrixReshape(self, mat, r, c):
#         if len(mat) * len(mat[0]) != r * c:
#             return mat
#         result = list()
#         temp = list()
#         for arr in mat:
#             for el in arr:
#                 temp.append(el)
#                 if len(temp) == c:
#                     result.append(temp)
#                     temp = list()
#         return result


# class Solution(object):
#     def generate(self, numRows):
#         if numRows == 1:
#             return [[1]]
#         triangle = [[1], [1,1]]
#         numRows -= 2
#         while numRows > 0:
#             arr = list()
#             arr.append(1)
#             for i in range(len(triangle[-1])):
#                 if i < len(triangle[-1]) - 1:
#                     arr.append(triangle[-1][i] + triangle[-1][i+1])
#             arr.append(1)
#             triangle.append(arr)
#             numRows -= 1
#         return triangle


# class Solution(object):
#     def isValidSudoku(self, board):
#         return self.checkBoxes(board) and self.checkRows(board) and self.checkCols(board)
#     def checkRows(self, board):
#         valid_rows = True
#         for r in board:
#             row_nums = set()
#             for c in r:
#                 if c in row_nums:
#                     valid_rows = False
#                 if c != '.':
#                     row_nums.add(c)
#         return valid_rows
#     def checkCols(self, board):
#         valid_cols = True
#         for i in range(9):
#             col_nums = set()
#             for j in range(9):
#                 if board[j][i] in col_nums:
#                     valid_cols = False
#                 if board[j][i] != '.':
#                     col_nums.add(board[j][i])
#         return valid_cols
#     def checkBoxes(self, board):
#         valid_boxes = True
#         centers = [[1,1],[1,4],[1,7],[4,1],[4,4],[4,7],[7,1],[7,4],[7,7]]
#         dirs = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]]
#         for r, c in centers:
#             box_nums = set()
#             if board[r][c] != '.':
#                 box_nums.add(board[r][c])
#             for x, y in dirs:
#                 new_r, new_c = r+x, c+y
#                 if board[new_r][new_c] in box_nums:
#                     valid_boxes = False
#                 if board[new_r][new_c] != '.':
#                     box_nums.add(board[new_r][new_c])
#         return valid_boxes


# class Solution(object):
#     def searchMatrix(self, matrix, target):
#         r = len(matrix) - 1
#         while r >= 0 and matrix[r][0] > target:
#             r -= 1
#         if r < 0:
#             return False
#         s = 0
#         end = len(matrix[r]) - 1
#         if matrix[r][s] == target or matrix[r][end] == target:
#             return True
#         while s+1 < end:
#             mid = (end + s) // 2
#             if matrix[r][mid] == target:
#                 return True
#             if matrix[r][mid] > target:
#                 end = mid
#             else:
#                 s = mid
#         return False


# class Solution(object):
#     def firstUniqChar(self, s):
#         indeces = {}
#         for i in range(len(s)):
#             if s[i] in indeces:
#                 indeces[s[i]] = float('inf')
#             else:
#                 indeces[s[i]] = i
#         print(indeces)
#         if len(indeces) == 0:
#             return -1
#         index = float('inf')
#         for k, v in indeces.items():
#             if v < index:
#                 index = v
#         return index if index != float('inf') else -1


# class Solution(object):
#     def canConstruct(self, ransomNote, magazine):
#         chars = dict()
#         for char in ransomNote:
#             chars[char] = chars.get(char, 0) + 1
#         for let in magazine:
#             if let in chars:
#                 chars[let] -= 1
#                 if chars[let] == 0:
#                     del chars[let]
#             if len(chars) == 0:
#                 return True
#         return False


# class Solution(object):
#     def isAnagram(self, s, t):
#         s_chars = dict()
#         t_chars = dict()
#         for i in range(len(s)):
#             s_chars[s[i]] = s_chars.get(s[i], 0) + 1
#             t_chars[t[i]] = t_chars.get(t[i], 0) + 1
#         for k, v in s_chars.items():
#             if k not in t_chars or s_chars[k] != t_chars[k]:
#                 return False
#         return True


# class Solution(object):
#     def hasCycle(self, head):
#         visited = set()
#         while head:
#             if head in visited:
#                 return True
#             visited.add(head)
#             head = head.next
#         return False


# def isAnagram(w1, w2):
#     if len(w1) != len(w2):
#         return False
#     w1_map = dict()
#     w2_map = dict()
#     for i in range(len(w1)):
#         char1, char2 = w1[i], w2[i]
#         w1_map[char1] = w1_map.get(char1, 0) + 1
#         w2_map[char2] = w2_map.get(char2, 0) + 1
#     for k, v in w1_map.items():
#         if not w2_map.get(k) or w2_map[k] != v:
#             return False
#     return True
# def getSearchResults(words, queries):
#     results = list()
#     for q in queries:
#         matches = list()
#         for w in words:
#             if isAnagram(q, w):
#                 matches.append(w)
#         matches.sort()
#         results.append(matches)
#     return results


# from datetime import date
# print(date(2017, 1, 13).strftime("%Y-%m-%dT%H:%M:%S"))
# def format_date(time_str, roll):
#     month, day, year = time_str.split('/')
#     year = '20' + year
#     return date(int(year), int(month), int(day)+roll).strftime("%Y-%m-%dT%H:%M:%S")
# def parse_for_platform(raw_ami_data):
#     sites = {}
#     projects = {}
#     meters = []

#     lines_of_data = raw_ami_data.split("|")

#     for line in lines_of_data:
#         row = make_row(line)
#         row = {k.strip(): v.strip() for k, v in row.items()}
#         id = row['meter_number']
#         if 'amount' not in row or row['amount'] == '' or (id[0] != 'E' and id[0] != 'G'):
#             continue
#         if id not in sites:
#             new_site = {
#                 'site_id': id,
#                 'raw_address': f"{row['street']} {row['city']} CA {row['zipcode']}"
#             }
#             sites[id] = new_site
#         if row['project_name'] not in projects:
#             new_project = {
#                 'project_id': row['project_name'],
#                 'blackout_start_date': format_date(row['project_date'], 0),
#                 'intervention_active_date': format_date(row['project_date'], 1),
#                 'project_site': id
#             }
#             projects[row['project_name']] = new_project
#         new_meter = {
#             'meter_id': id,
#             'meter_site': id,
#             'type': 'gas' if id[0] == 'G' else 'electricity',
#             'unit': 'therm' if id[0] == 'G' else 'kwh',
#             'start': format_date(row['read_from'], 0),
#             'end': format_date(row['read_to'], 0),
#             'value': row['amount']
#         }
#         meters.append(new_meter)
#     sites = sites.values()
#     projects = projects.values()
#     return sites, projects, meters


# class Solution(object):
#     def isHappy(self, n):
#         visited = set()
#         while n not in visited:
#             visited.add(n)
#             if n == 1:
#                 return True
#             num = 0
#             while n >= 10:
#                 single = n % 10
#                 num += single*single
#                 n = n // 10
#             num += n*n
#             n = num
#         return False


# class Solution(object):
#     def spiralOrder(self, matrix):
#         def add_to_results(m, r, x, y, v):
#             if f"{x}-{y}" not in v:
#                 v.add(f"{x}-{y}")
#                 r.append(m[x][y])
#         result = []
#         visited = set()
#         t = 0
#         r = len(matrix[0]) - 1
#         b = len(matrix) - 1
#         l = 0
#         while t <= b and l <= r:
#             for h in range(l, r):
#                 add_to_results(matrix, result, t, h, visited)
#             for i in range(t, b):
#                 add_to_results(matrix, result, i, r, visited)
#             for j in range(r, l, -1):
#                 add_to_results(matrix, result, b, j, visited)
#             for k in range(b, t, -1):
#                 add_to_results(matrix, result, k, l, visited)
#             t += 1
#             r -= 1
#             b -= 1
#             l += 1
#         if len(result) != len(matrix) * len(matrix[0]):
#             x = len(matrix) // 2
#             y = len(matrix[0]) // 2
#             result.append(matrix[x][y])
#         return result


# class Solution(object):
#     def findBall(self, grid):
#         results = list()
#         for i in range(len(grid[0])):
#             index = i
#             for j in range(len(grid)):
#                 if grid[j][index] == 1:
#                     if index+1 >= len(grid[0]) or grid[j][index+1] == -1:
#                         results.append(-1)
#                         break
#                     index += 1
#                 if grid[j][index] == -1:
#                     if index-1 < 0 or grid[j][index-1] == 1:
#                         results.append(-1)
#                         break
#                     index -= 1
#                 if j+1 == len(grid):
#                     results.append(index)
#         return results


# class Solution(object):
#     def longestCommonPrefix(self, strs):
#         result = strs[0]
#         for i in range(1, len(strs)):
#             matches = ''
#             for j in range(len(strs[i])):
#                 if result[j] == strs[i][j]:
#                     matches += result[j]
#                 else:
#                     break
#             result = matches
#         return result


# class Solution(object):
#     def multiply(self, num1, num2):
#         n1 = 0
#         for n in num1:
#             n1 *= 10
#             n1 += ord(n)-48
#         n2 = 0
#         for n in num2:
#             n2 *= 10
#             n2 += ord(n)-48
#         return str(n1*n2)


# class Solution(object):
#     def removeNthFromEnd(self, head, n):
#         if not head or not head.next:
#             return None
#         nodes = list()
#         curr = head
#         while curr:
#             nodes.append(curr)
#             curr = curr.next
#         i = len(nodes) - n
#         nodes[i].next = None
#         nodes.pop(i)
#         for j in range(len(nodes)):
#             if j == len(nodes) - 1:
#                 nodes[j].next = None
#             else:
#                 nodes[j].next = nodes[j+1]
#         return nodes[0]


# class Solution(object):
#     def isPalindrome(self, head):
#         values = list()
#         while head:
#             values.append(head.val)
#             head = head.next
#         l = 0
#         r = len(values) - 1
#         while l < r:
#             if values[l] != values[r]:
#                 return False
#             l += 1
#             r -= 1
#         return True


# class Solution(object):
#     def oddEvenList(self, head):
#         if not head or not head.next:
#             return head
#         is_odd = True
#         odds = ListNode()
#         evens = ListNode()
#         even_head = evens
#         curr = head
#         while curr:
#             if is_odd:
#                 odds.next = curr
#                 odds = odds.next
#             else:
#                 evens.next = curr
#                 evens = evens.next
#             curr = curr.next
#             is_odd = not is_odd
#         evens.next = None
#         odds.next = even_head.next
#         return head


# class Solution(object):
#     def sortList(self, head):
#         values = list()
#         curr = head
#         while curr:
#             values.append(curr.val)
#             curr = curr.next
#         values.sort()
#         curr = head
#         for i in range(len(values)):
#             curr.val = values[i]
#             curr = curr.next
#         return head


# class Solution(object):
#     def longestPalindrome(self, words):
#         counts = dict()
#         for word in words:
#             rev = word[::-1]
#             if rev in counts:
#                 counts[rev] -= 1
#                 if counts[rev] <= 0:
#                     del counts[rev]
#             else:
#                 counts[word] = counts.get(word, 0) + 1
#         total_chars = len(words)*2
#         has_middle = False
#         for k, v in counts.items():
#             rev = k[::-1]
#             if not has_middle and rev == k:
#                 has_middle = True
#                 continue
#             else:
#                 total_chars -= v*2
#         return total_chars


# class Solution(object):
#     def leastInterval(self, tasks, n):
#         if n == 0:
#             return len(tasks)
#         counts = dict()
#         time = 0
#         for task in tasks:
#             counts[task] = counts.get(task, 0) + 1
#         values = counts.values()
#         most_rep = max(values)
#         for v in values:
#             if v == most_rep:
#                 time += 1
#         return max((most_rep-1) * (n+1) + time, len(tasks))


# class Solution(object):
#     def invertTree(self, root):
#         stack = [root]
#         while len(stack):
#             curr = stack.pop()
#             temp = curr.left
#             curr.left = curr.right
#             curr.right = temp
#             if curr.left:
#                 stack.append(curr.left)
#             if curr.right:
#                 stack.append(curr.right)
#         return root


# class Solution(object):
#     def isBalanced(self, root):
#         def traverse(node):
#             if not node:
#                 return 0
#             left = traverse(node.left)
#             right = traverse(node.right)
#             if left == -1 or right == -1 or abs(left - right) > 1:
#                 return -1
#             return max(left, right) + 1
#         return traverse(root) != -1


# class Solution(object):
#     def diameterOfBinaryTree(self, root):
#         if not root:
#             return 0
#         def get_max_path(node, level=0):
#             if not node:
#                 return 0
#             level += 1
#             left = get_max_path(node.left, level) if node.left else level
#             right = get_max_path(node.right, level) if node.right else level
#             return max(left, right)
#         return max(get_max_path(root.left)+get_max_path(root.right), self.diameterOfBinaryTree(root.left), self.diameterOfBinaryTree(root.right))


# class Solution(object):
#     def pathSum(self, root, targetSum):
#         values = [targetSum]
#         def traverse(node, vals, target):
#             if not node:
#                 return 0
#             paths = 0
#             for v in vals:
#                 if v - node.val == 0:
#                     paths += 1
#             vals = [v - node.val for v in vals]
#             vals.append(target)
#             return traverse(node.left, vals, target) + traverse(node.right, vals, target) + paths
#         return traverse(root, values, targetSum)


# class Solution(object):
#     def searchMatrix(self, matrix, target):
#         r = len(matrix) - 1
#         while r >= 0 and matrix[r][0] > target:
#             r -= 1
#         if r < 0:
#             return False
#         s = 0
#         end = len(matrix[r]) - 1
#         if matrix[r][s] == target or matrix[r][end] == target:
#             return True
#         while s+1 < end:
#             mid = (end + s) // 2
#             if matrix[r][mid] == target:
#                 return True
#             if matrix[r][mid] > target:
#                 end = mid
#             else:
#                 s = mid
#         return False


# class Solution(object):
#     def search(self, nums, target):
#         l = 0
#         r = len(nums) - 1
#         while l <= r:
#             if nums[l] == target:
#                 return l
#             if nums[r] == target:
#                 return r
#             l += 1
#             r -= 1
#         return -1


# class Solution(object):
#     def sortedArrayToBST(self, nums):
#         if not len(nums):
#             return None
#         mid = len(nums) // 2
#         root = TreeNode(nums[mid])
#         root.right = self.sortedArrayToBST(nums[mid+1::])
#         root.left = self.sortedArrayToBST(nums[:mid:])
#         return root


# class Solution(object):
#     def kthSmallest(self, root, k):
#         stack = [root]
#         values = []
#         while len(stack):
#             curr = stack.pop()
#             values.append(curr.val)
#             if curr.right:
#                 stack.append(curr.right)
#             if curr.left:
#                 stack.append(curr.left)
#         values.sort()
#         return values[k-1]


# class BSTIterator(object):

#     def get_values(self, root):
#         stack = [root]
#         values = [float('-inf')]
#         while len(stack):
#             curr = stack.pop()
#             values.append(curr.val)
#             if curr.right:
#                 stack.append(curr.right)
#             if curr.left:
#                 stack.append(curr.left)
#         values.sort()
#         return values

#     def __init__(self, root):
#         self.values = self.get_values(root)
#         self.pointer = 0

#     def next(self):
#         self.pointer += 1
#         return self.values[self.pointer]


#     def hasNext(self):
#         return self.pointer < len(self.values) - 1


# class Solution(object):
#     def orangesRotting(self, grid):
#         bad = []
#         good = 0
#         for i in range(len(grid)):
#                 for j in range(len(grid[i])):
#                     if grid[i][j] == 1:
#                         good += 1
#                     if grid[i][j] == 2:
#                         bad.append([i, j])
#         if len(bad) == 0 and good > 0:
#             return -1
#         if len(bad) == 0:
#             return 0
#         time = 0
#         while len(bad):
#             new_bad = []
#             for x, y in bad:
#                 adjusts = [[0, 1],[1, 0],[0, -1],[-1,0]]
#                 for i, j in adjusts:
#                     r = x + i
#                     c = y + j
#                     if 0 <= r < len(grid) and 0 <= c < len(grid[r]) and grid[r][c] == 1:
#                         grid[r][c] = 2
#                         good -= 1
#                         new_bad.append([r, c])
#             bad = new_bad
#             if len(bad):
#                 time += 1
#         return time if good == 0 else -1


# class Solution(object):
#     def pacificAtlantic(self, heights):
#         def traverse(visited, r, c, max_r, max_c):
#             visited.add((r, c))
#             for x, y in [[0, 1],[1, 0],[0, -1],[-1, 0]]:
#                 new_r = r + x
#                 new_c = c + y
#                 if 0 <= new_r < max_r and 0 <= new_c < max_c and (new_r, new_c) not in visited and heights[new_r][new_c] >= heights[r][c]:
#                     traverse(visited, new_r, new_c, max_r, max_c)
#         if not heights or not heights[0]:
#             return []
#         reach_pac = set()
#         reach_alt = set()
#         l1 = len(heights)
#         l2 = len(heights[0])
#         for i in range(l1):
#             traverse(reach_pac, i, 0, l1, l2)
#             traverse(reach_alt, i, l2-1, l1, l2)
#         for j in range(l2):
#             traverse(reach_pac, 0, j, l1, l2)
#             traverse(reach_alt, l1-1, j, l1, l2)
#         return list(reach_pac.intersection(reach_alt))


# class Solution(object):
#     def findOrder(self, numCourses, prerequisites):
#         if not len(prerequisites):
#             return [i for i in range(numCourses)]
#         yes = {}
#         no = {}
#         for c, req in prerequisites:
#             yes[c] = yes.get(c, 0) + 1
#             no[req] = no.get(req) or list()
#             no[req].append(c)
#         open = set(range(numCourses)) - set(yes)
#         done = []
#         while open:
#             curr = open.pop()
#             done.append(curr)
#             for r in no.get(curr, []):
#                 yes[r] -= 1
#                 yes[r] or open.add(r)
#         return done * (len(done) == numCourses)


# class Solution(object):
#     def numBusesToDestination(self, routes, source, target):
#         if source == target:
#             return 0
#         routes = [set(r) for r in routes]
#         stops = [set() for _ in range(len(routes))]
#         for i in range(len(routes)):
#             for j in range(i):
#                 if set(routes[i]) & set(routes[j]):
#                     stops[i].add(j)
#                     stops[j].add(i)
#         visited = set(i for i, r in enumerate(routes) if source in r)
#         destination = set(i for i, r in enumerate(routes) if target in r)
#         q = [(x, 1) for x in visited]
#         for x, buses in q:
#             if x in destination:
#                 return buses
#             for y in stops[x]:
#                 if y not in visited:
#                     visited.add(y)
#                     q.append((y, buses+1))
#         return -1


# class Solution(object):
#     def rob(self, nums):
#         l = len(nums)
#         if l == 0:
#             return 0
#         vals = [0 for _ in range(l)]
#         for i in range(l):
#             if i-1 > 0:
#                 vals[i] = nums[i] + max(vals[:i-1])
#             else:
#                 vals[i] = nums[i]
#         return max(vals)


# class Solution(object):
#     def coinChange(self, coins, amount):
#         if amount <= 0:
#             return 0
#         dyna = [float('inf') for _ in range(amount+1)]
#         dyna[0] = 0
#         for c in coins:
#             for i in range(c, amount+1):
#                 dyna[i] = min(dyna[i], dyna[i-c]+1)
#         return dyna[amount] if dyna[amount] != float('inf') else -1


# class Solution(object):
#     def canPartition(self, nums):
#         if len(nums) < 2:
#             return False
#         nums.sort()
#         total = sum(nums)
#         if total % 2 == 1:
#             return False
#         target = total / 2
#         poss = set([target])
#         for num in nums:
#             temp = set()
#             for p in poss:
#                 p -= num
#                 if p == 0:
#                     return True
#                 if p > 0:
#                     temp.add(p)
#             poss = poss.union(temp)
#         return False


# class Solution(object):
#     def maxProduct(self, nums):
#         if not len(nums):
#             return 0
#         if len(nums) == 1:
#             return nums[0]
#         prod = 0
#         num = 0
#         maxim = nums[0]
#         if nums[0] > 0:
#             prod = nums[0]
#         else:
#             num = nums[0]
#         for i in range(1, len(nums)):
#             if nums[i] > 0:
#                 prod, num = max(prod*nums[i], nums[i]), num * nums[i]
#             else:
#                 prod, num = num * nums[i], min(prod*nums[i], nums[i])
#             maxim = max(maxim, prod)
#         return maxim


# class Solution(object):
#     def lengthOfLongestSubstring(self, s):
#         length = len(s)
#         if length == 0:
#             return 0
#         l = 0
#         r = 0
#         longest = 0
#         indeces = {}
#         while r < length:
#             if indeces.get(s[r], -1) >= 0:
#                 while l <= indeces[s[r]]:
#                     indeces[s[l]] = False
#                     l += 1
#             indeces[s[r]] = r
#             longest = max(longest, (r-l)+1)
#             r += 1
#         return longest


# class Solution(object):
#     def threeSumClosest(self, nums, target):
#         length = len(nums)
#         if length == 3:
#             return sum(nums)
#         nums.sort()
#         result = 0
#         curr_diff = float('inf')
#         for i in range(length-2):
#             if i > 0 and nums[i] == nums[i-1]:
#                 continue
#             l = i + 1
#             r = length - 1
#             while l < r:
#                 total = nums[i] + nums[l] + nums[r]
#                 diff = abs(total - target)
#                 if diff == 0:
#                     return total
#                 if diff < curr_diff:
#                     result = total
#                     curr_diff = diff
#                 if total < target:
#                     l += 1
#                 else:
#                     r -= 1
#         return result


# class Solution(object):
#     def matches(self, m1 , m2):
#         for k, v in m2.items():
#             if k not in m1 or v > m1[k]:
#                 return False
#         return True
#     def minWindow(self, s, t):
#         if len(s) < len(t):
#             return ''
#         result = ''
#         length = float('inf')
#         s_map = {}
#         t_map = {}
#         for char in t:
#             t_map[char] = t_map.get(char, 0) + 1
#         l = 0
#         r = 0
#         while r < len(s):
#             s_map[s[r]] = s_map.get(s[r], 0) + 1
#             while l < r and (s[l] not in t_map or s_map[s[l]] > t_map[s[l]]):
#                 s_map[s[l]] -= 1
#                 l += 1
#             new_len = (r - l) + 1
#             if self.matches(s_map, t_map) and new_len < length:
#                 length = new_len
#                 result = s[l:r+1]
#             r += 1
#         return result


# class Solution(object):
#     def isSameTree(self, p, q):
#         if not p and not q:
#             return True
#         if p and not q:
#             return False
#         if not p and q:
#             return False
#         if p.val != q.val:
#             return False
#         return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)


# class Solution(object):
#     def containsDuplicate(self, nums):
#         has = set()
#         for n in nums:
#             if n in has:
#                 return True
#             has.add(n)
#         return False


# class Solution(object):
#     def maxSubArray(self, nums):
#         if len(nums) == 1:
#             return nums[0]
#         for i in range(len(nums)):
#             if i > 0:
#                 nums[i] = max(nums[i-1], nums[i-1] + nums[i], nums[i])
#         return max(nums)


# class Solution(object):
#     def tribonacci(self, n):
#         third, second, first = 0,1,1
#         if n <= 2:
#             return [third, second, first][n]
#         while n > 2:
#             first += second + third
#             temp = second
#             second = first - (second+third)
#             third = temp
#             n -= 1
#         return first


# class Solution(object):
#     def removeElements(self, head, val):
#         if not head:
#             return head
#         while head.val == val:
#             head = head.next
#         curr = head
#         prev = None
#         while curr:
#             if curr.val == val:
#                 prev.next = curr.next
#             else:
#                 prev = prev.next
#             curr = curr.next
#         return head


# class Solution(object):
#     def deleteDuplicates(self, head):
#         if not head or not head.next:
#             return head
#         prev = head
#         curr = head.next
#         nex_n = curr.next
#         while nex_n:
#             while curr and curr.val == prev.val:
#                 temp = curr
#                 curr = curr.next
#                 temp.next = None
#                 nex_n = nex_n.next if nex_n else None
#             prev.next = curr
#             prev = curr
#             curr = nex_n
#             nex_n = nex_n.next if nex_n else None
#         if prev:
#             prev.next = curr if curr and curr.val != prev.val else None
#         return head


# class Solution(object):
#     def isValid(self, s):
#         def check(arr, char):
#             l = len(arr)
#             if l == 0:
#                 return False
#             if (char == ']' and arr[l-1] == '[') or (char == '}' and arr[l-1] == '{') or (char == ')' and arr[l-1] == '('):
#                 arr.pop()
#             return len(arr) < l
#         chars = []
#         checked = True
#         for let in s:
#             if let == '(' or let == '{' or let == '[':
#                 chars.append(let)
#             else:
#                 checked = checked and check(chars, let)
#         return checked and len(chars) == 0


# class MyQueue(object):

#     def __init__(self):
#         self.q = []

#     def push(self, x):
#         """
#         :type x: int
#         :rtype: None
#         """
#         self.q.append(x)
#         return


#     def pop(self):
#         """
#         :rtype: int
#         """
#         beg = self.q[0]
#         self.q = self.q[1:]
#         return beg

#     def peek(self):
#         """
#         :rtype: int
#         """
#         return self.q[0]


#     def empty(self):
#         """
#         :rtype: bool
#         """
#         return len(self.q) == 0


# class Solution(object):
#     def deleteAndEarn(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         if not nums:
#             return 0
#         new_nums = [0] * (max(nums)+1)
#         nums.sort()
#         for num in nums:
#             new_nums[num] += num
#         for ind in range(len(new_nums)):
#             if ind > 1:
#                 new_nums[ind] = max(new_nums[ind] + new_nums[ind-2], new_nums[ind-1])
#         return max(new_nums)


# class Solution(object):
#     def canJump(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: bool
#         """
#         if len(nums) == 1:
#             return True
#         curr = nums[0]
#         for i in range(len(nums)-1):
#             if curr < nums[i]:
#                 curr = nums[i]
#             if curr == 0:
#                 return False
#             curr -= 1
#         return True


# class Solution(object):
#     def jump(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         curr = -1
#         nex_t = 0
#         jumps = 0
#         i = 0
#         while nex_t < len(nums)-1:
#             if i > curr:
#                 jumps += 1
#                 curr = nex_t
#             nex_t = max(nex_t, nums[i]+i)
#             i += 1
#         return jumps


# class Solution(object):
#     def hammingWeight(self, n):
#         """
#         :type n: int
#         :rtype: int
#         """
#         nums = '{0:032b}'.format(n)
#         total = 0
#         for num in nums:
#             if num == '1':
#                 total += 1
#         return total


# class Solution(object):
#     def subtractProductAndSum(self, n):
#         """
#         :type n: int
#         :rtype: int
#         """
#         p = 1
#         s = 0
#         while n > 0:
#             dig = n % 10
#             n = n // 10
#             p *= dig
#             s += dig
#         return p - s


# class Solution(object):
#     def maxSubarraySumCircular(self, nums):
#         length = len(nums)
#         cir_sum = nums[0]
#         csum = nums[0]
#         max_sum = nums[0]
#         for i in range(1, length):
#             cir_sum += nums[i]
#             csum = max(nums[i], nums[i]+csum)
#             max_sum = max(csum, max_sum)
#         csum = nums[0]
#         min_sum = nums[0]
#         for j in range(1, length):
#             csum = min(nums[j], nums[j]+csum)
#             min_sum = min(csum, min_sum)
#         cir_sum -= min_sum
#         if cir_sum == 0:
#             return max_sum
#         return max(max_sum, cir_sum)


# class Solution:
#     def getMaxLen(self, nums):
#         total = 0
#         positive = 0
#         negative = 0
#         for num in nums:
#             if num > 0:
#                 positive += 1
#                 negative = negative + 1 if negative else 0
#             elif num < 0:
#                 temp = positive
#                 positive = negative + 1 if negative else 0
#                 negative = temp + 1
#             else:
#                 positive = 0
#                 negative = 0
#             total = max(total, positive)
#         return total


# class Solution(object):
#     def maxScoreSightseeingPair(self, values):
#         """
#         :type values: List[int]
#         :rtype: int
#         """
#         # length = len(values)
#         # rights = [values[i]-i for i in range(length)]
#         # lefts = [values[i]+i for i in range(length)]
#         # for i in range(length):
#         #     values[i] = lefts[i] + max(rights[i+1:])
#         # return max(values)
#         length = len(values)
#         maxi = 0
#         i = 0
#         for j in range(i+1, length):
#             maxi = max(maxi, values[i] + values[j] + i - j)
#             if values[j] + j - i > values[i]:
#                 i = j
#         return maxi


# class Solution(object):
#     def largestPerimeter(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         nums.sort()
#         for i in range(len(nums)-3, -1, -1):
#             n1, n2, n3 = nums[i], nums[i+1], nums[i+2]
#             if n1 + n2 > n3:
#                 return n1 + n2 + n3
#         return 0


# class Solution(object):
#     def nearestValidPoint(self, x, y, points):
#         """
#         :type x: int
#         :type y: int
#         :type points: List[List[int]]
#         :rtype: int
#         """
#         index = -1
#         curr_dis = float('inf')
#         for i in range(len(points)):
#             [r, c] = points[i]
#             if r == x or c == y:
#                 dis = abs(x-r) + abs(y-c)
#                 if dis < curr_dis:
#                     curr_dis = dis
#                     index = i
#         return index


# class Solution(object):
#     def arraySign(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         negs = 0
#         for n in nums:
#             if n == 0:
#                 return 0
#             if n < 0:
#                 negs += 1
#         return 1 if negs % 2 == 0 else -1


# class Solution(object):
#     def canMakeArithmeticProgression(self, arr):
#         """
#         :type arr: List[int]
#         :rtype: bool
#         """
#         arr.sort()
#         diff = arr[1] - arr[0]
#         for i in range(1, len(arr)):
#             if i < len(arr) - 1 and arr[i+1] - arr[i] != diff:
#                 return False
#         return True


# class Solution(object):
#     def isHappy(self, n):
#         """
#         :type n: int
#         :rtype: bool
#         """
#         if n <= 0:
#             return False
#         visited = set()
#         while n != 1:
#             if n in visited:
#                 return False
#             else: visited.add(n)
#             new_n = 0
#             while n > 9:
#                 ones = n % 10
#                 new_n += ones * ones
#                 n = n // 10
#             new_n += n * n
#             n = new_n
#         return True


# class Solution(object):
#     def areAlmostEqual(self, s1, s2):
#         """
#         :type s1: str
#         :type s2: str
#         :rtype: bool
#         """
#         def check_set(char, charset):
#             if char in charset:
#                 charset.remove(char)
#             else:
#                 charset.add(char)
#             return
#         needed = set()
#         swaps = 0
#         for i in range(len(s1)):
#             if s1[i] not in s2 or s2[i] not in s1:
#                 return False
#             if s1[i] == s2[i]:
#                 continue
#             else:
#                 swaps += 1
#                 check_set(s1[i], needed)
#                 check_set(s2[i], needed)
#         return True if swaps <= 2 and len(needed) == 0 else False


# class Solution(object):
#     def preorder(self, root):
#         """
#         :type root: Node
#         :rtype: List[int]
#         """
#         def recurse(root, result=[]):
#             if not root:
#                 return result
#             result.append(root.val)
#             for child in root.children:
#                 recurse(child, result)
#             return result
#         return recurse(root)


# class Solution(object):
#     def nextGreaterElement(self, nums1, nums2):
#         """
#         :type nums1: List[int]
#         :type nums2: List[int]
#         :rtype: List[int]
#         """
#         ans = [-1 for _ in range(len(nums1))]
#         for i in range(len(nums2)):
#             n = nums2[i]
#             if n in nums1:
#                 for j in range(i+1,len(nums2)):
#                     if nums2[j] > n:
#                         ans[nums1.index(n)] = nums2[j]
#                         break
#         return ans


# class Solution(object):
#     def checkStraightLine(self, coordinates):
#         [x1, y1] = coordinates[0]
#         [x2, y2] = coordinates[1]
#         for i in range(2, len(coordinates)):
#             [x3, y3] = coordinates[i]
#             if (y2 - y1) * (x3 - x1) != (y3 - y1) * (x2 - x1):
#                 return False
#         return True


# class Solution:
#     def sumOddLengthSubarrays(self, arr):
#         total = 0
#         for i in range(len(arr)):
#             num = arr[i]
#             l = i
#             r = len(arr) - i - 1
#             total += num * (l // 2 + 1) * (r // 2 + 1)
#             total += num * ((l+1) // 2) * ((r+1) // 2)
#         return total


# class Solution(object):
#     def moveZeroes(self, nums):
#         index = 0
#         for i in range(len(nums)):
#             if nums[i] != 0:
#                 nums[index], nums[i] = nums[i], nums[index]
#                 index += 1


# class Solution(object):
#     def maximumWealth(self, accounts):
#         maxi = 0
#         for acc in accounts:
#             maxi = max(maxi, sum(acc))
#         return maxi


# class Solution(object):
#     def diagonalSum(self, mat):
#         def add(r, c, m, v):
#             if (r, c) not in v:
#                 v.add((r, c))
#                 return m[r][c]
#             return 0
#         rl = len(mat)
#         cl = len(mat[0])
#         visited = set()
#         x, y = 0, 0
#         total = 0
#         while x < rl and y < cl:
#             total += add(x, y, mat, visited)
#             x += 1
#             y += 1
#         x, y = 0, cl-1
#         while x < rl and y >= 0:
#             total += add(x, y, mat, visited)
#             x += 1
#             y -= 1
#         return total


# class Solution(object):
#     def matrixReshape(self, mat, r, c):
#         rl = len(mat)
#         cl = len(mat[0])
#         if rl * cl != r * c:
#             return mat
#         new = []
#         lis = []
#         for arr in mat:
#             for num in arr:
#                 lis.append(num)
#                 if len(lis) == c:
#                     new.append(lis)
#                     lis = []
#         return new


# class Solution(object):
#     def spiralOrder(self, matrix):
#         """
#         :type matrix: List[List[int]]
#         :rtype: List[int]
#         """
#         def add(m, v, a, x, y):
#             key = (x, y)
#             if key not in v:
#                 v.add(key)
#                 a.append(m[x][y])
#         cl = len(matrix[0])
#         rl = len(matrix)
#         nums = cl * rl
#         t = 0
#         r = cl - 1
#         b = rl - 1
#         l = 0
#         res = []
#         visited = set()
#         while len(res) < nums:
#             for h in range(l, r+1):
#                 add(matrix, visited, res, t, h)
#             for i in range(t, b+1):
#                 add(matrix, visited, res, i, r)
#             for j in range(r, l-1, -1):
#                 add(matrix, visited, res, b, j)
#             for k in range(b, t-1, -1):
#                 add(matrix, visited, res, k, l)
#             t += 1
#             b -= 1
#             r -= 1
#             l += 1
#             if len(res) == nums-1:
#                 res.append(matrix[rl//2][cl//2])
#         return res


# class Solution(object):
#     def findBall(self, grid):
#         """
#         :type grid: List[List[int]]
#         :rtype: List[int]
#         """
#         rl = len(grid)
#         cl = len(grid[0])
#         res = []
#         for i in range(cl):
#             r = 0
#             ball = i
#             while r < rl:
#                 curr = grid[r][ball]
#                 if (curr == -1 and (ball == 0 or grid[r][ball-1] == 1)) or (curr == 1 and (ball == cl-1 or grid[r][ball+1] == -1)):
#                     ball = -1
#                     break
#                 ball += 1 if curr == 1 else -1
#                 r += 1
#             res.append(ball)
#         return res


# class Solution(object):
#     def isPalindrome(self, x):
#         """
#         :type x: int
#         :rtype: bool
#         """
#         x = str(x)
#         y = [x[i] for i in range(len(x))]
#         y.reverse()
#         return x == ''.join(y)


# class Solution(object):
#     def longestCommonPrefix(self, strs):
#         """
#         :type strs: List[str]
#         :rtype: str
#         """
#         end = len(strs[0])
#         for i in range(1, len(strs)):
#             end = min(end, len(strs[i]))
#             for j in range(end):
#                 if strs[0][j] != strs[i][j]:
#                     end = j
#                     break
#         return strs[0][:end]


# class Solution(object):
#     def multiply(self, num1, num2):
#         """
#         :type num1: str
#         :type num2: str
#         :rtype: str
#         """
#         def to_num(num):
#             number = 0
#             mul = 1
#             for i in range(len(num)-1, -1, -1):
#                 n = int(num[i])
#                 number += n * mul
#                 mul *= 10
#             return number
#         return str(to_num(num1) * to_num(num2))


# class Solution(object):
#     def romanToInt(self, s):
#         """
#         :type s: str
#         :rtype: int
#         """
#         r_n = {
#             'I': 1,
#             'V': 5,
#             'X': 10,
#             'L': 50,
#             'C': 100,
#             'D': 500,
#             'M': 1000
#         }
#         l = len(s)
#         total = 0
#         i = 0
#         while i < l:
#             if i < l-1 and r_n[s[i]] < r_n[s[i+1]]:
#                 total += r_n[s[i+1]] - r_n[s[i]]
#                 i += 1
#             else:
#                 total += r_n[s[i]]
#             i += 1
#         return total


# class Solution(object):
#     def removeDuplicates(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         i = 0
#         ns = set()
#         for num in nums:
#             if num not in ns:
#                 nums[i] = num
#                 ns.add(num)
#                 i += 1
#         return len(ns)


# class Solution(object):
#     def removeNthFromEnd(self, head, n):
#         """
#         :type head: ListNode
#         :type n: int
#         :rtype: ListNode
#         """
#         if n == 1 and not head.next:
#             return None
#         nodes = []
#         while head:
#             nodes.append(head)
#             head = head.next
#         nodes.pop(len(nodes)-n)
#         l = len(nodes)
#         for i in range(l):
#             if i < l - 1:
#                 nodes[i].next = nodes[i+1]
#         nodes[l-1].next = None
#         return nodes[0]


# class Solution(object):
#     def isPalindrome(self, head):
#         """
#         :type head: ListNode
#         :rtype: bool
#         """
#         nodes = []
#         while head:
#             nodes.append(head)
#             head = head.next
#         j = len(nodes) - 1
#         i = 0
#         while i <= j:
#             if nodes[i].val != nodes[j].val:
#                 return False
#             j -= 1
#             i += 1
#         return True


# class Solution(object):
#     def removeElement(self, nums, val):
#         """
#         :type nums: List[int]
#         :type val: int
#         :rtype: int
#         """
#         vals = 0
#         for i in range(len(nums)):
#             if nums[i] == val:
#                 nums[i] = float('inf')
#                 vals += 1
#         nums.sort()
#         return len(nums) - vals


# class Solution(object):
#     def oddEvenList(self, head):
#         """
#         :type head: ListNode
#         :rtype: ListNode
#         """
#         if not head or not head.next:
#             return head
#         even_head = head.next
#         odd = head
#         even = even_head
#         while odd.next and even.next:
#             odd.next = even.next
#             odd = odd.next
#             if odd:
#                 even.next = odd.next
#             even = even.next
#         odd.next = even_head
#         if even:
#             even.next = None
#         return head


# class Solution(object):
#     def sortList(self, head):
#         """
#         :type head: ListNode
#         :rtype: ListNode
#         """
#         if not head or not head.next:
#             return head
#         vals = []
#         curr = head
#         while curr:
#             vals.append(curr.val)
#             curr = curr.next
#         vals.sort()
#         curr = head
#         for val in vals:
#             curr.val = val
#             curr = curr.next
#         return head


# class Solution(object):
#     def searchMatrix(self, matrix, target):
#         """
#         :type matrix: List[List[int]]
#         :type target: int
#         :rtype: bool
#         """
#         i = 0
#         while i < len(matrix) and matrix[i][0] <= target:
#             i += 1
#         for num in matrix[i-1]:
#             if num == target:
#                 return True
#         return False


# class Solution(object):
#     def search(self, nums, target):
#         try:
#             i = nums.index(target)
#         except ValueError:
#             return -1
#         return i


# class Solution(object):
#     def lengthOfLastWord(self, s):
#         """
#         :type s: str
#         :rtype: int
#         """
#         s = s.strip()
#         return len(s.split()[-1])


# class Solution(object):
#     def plusOne(self, digits):
#         """
#         :type digits: List[int]
#         :rtype: List[int]
#         """
#         i = len(digits) - 1
#         digits[i] += 1
#         while i >= 0 and digits[i] > 9:
#             digits[i] = 0
#             if i > 0:
#                 digits[i-1] += 1
#             else:
#                 digits = [1] + digits
#             i -= 1
#         return digits


# class Solution(object):
#     def addBinary(self, a, b):
#         """
#         :type a: str
#         :type b: str
#         :rtype: str
#         """
#         return bin(int(a, base=2)+int(b, base=2))[2:]


# class Solution(object):
#     def mySqrt(self, x):
#         """
#         :type x: int
#         :rtype: int
#         """
#         if x == 1:
#             return 1
#         l = 0
#         r = x
#         while l <= r:
#             m = (l + r) // 2
#             if m*m > x:
#                 r = m - 1
#             elif m*m < x:
#                 l = m + 1
#             else:
#                 return m
#         return r


# class Solution(object):
#     def inorderTraversal(self, root):
#         """
#         :type root: TreeNode
#         :rtype: List[int]
#         """
#         res = []
#         def traverse(n, r):
#             if not n:
#                 return r
#             traverse(n.left, r)
#             r.append(n.val)
#             traverse(n.right, r)
#             return r
#         return traverse(root, res)


# class Solution(object):
#     def isSymmetric(self, root):
#         """
#         :type root: TreeNode
#         :rtype: bool
#         """
#         if not root:
#             return True
#         def check(l, r):
#             if not l and not r:
#                 return True
#             if not l or not r:
#                 return False
#             if l.val != r.val:
#                 return False
#             return check(l.left, r.right) and check(l.right, r.left)
#         return check(root, root)


# class Solution(object):
#     def rightSideView(self, root):
#         """
#         :type root: TreeNode
#         :rtype: List[int]
#         """
#         stack = [[root]]
#         res = []
#         while len(stack):
#             level = stack.pop()
#             if level[0] == None: break
#             res.append(level[0].val)
#             new_level = []
#             for node in level:
#                 if node.right:
#                     new_level.append(node.right)
#                 if node.left:
#                     new_level.append(node.left)
#             if len(new_level):
#                 stack.append(new_level)
#         return res


# class MinStack(object):

#     def __init__(self):
#         self.stack = []
#         self.min_i = None


#     def push(self, val):
#         """
#         :type val: int
#         :rtype: None
#         """
#         self.stack.append(val)
#         if self.min_i == None:
#             self.min_i = 0
#         elif val < self.stack[self.min_i]:
#             self.min_i = len(self.stack)-1


#     def pop(self):
#         """
#         :rtype: None
#         """
#         l = len(self.stack)-1
#         self.stack.pop()
#         if len(self.stack) and self.min_i == l:
#             self.min_i = self.stack.index(min(self.stack))
#         if not len(self.stack):
#             self.min_i = None


#     def top(self):
#         """
#         :rtype: int
#         """
#         return self.stack[-1]


#     def getMin(self):
#         """
#         :rtype: int
#         """
#         return self.stack[self.min_i]


# class Trie(object):

#     def __init__(self):
#         self.trie = {}

#     def insert(self, word):
#         """
#         :type word: str
#         :rtype: None
#         """
#         l = len(word)
#         curr = self.trie
#         for i in range(l):
#             let = word[i]
#             if let in curr:
#                 curr = curr[let]
#             else:
#                 curr[let] = {"is_word": False}
#                 curr = curr[let]
#             if i == l-1:
#                 curr['is_word'] = True


#     def search(self, word):
#         """
#         :type word: str
#         :rtype: bool
#         """
#         l = len(word)
#         curr = self.trie
#         for i in range(l):
#             let = word[i]
#             if let not in curr:
#                 return False
#             curr = curr[let]
#             if i == l-1:
#                 return curr['is_word']

#     def startsWith(self, prefix):
#         """
#         :type prefix: str
#         :rtype: bool
#         """
#         curr = self.trie
#         for let in prefix:
#             if let not in curr:
#                 return False
#             curr = curr[let]
#         return True


# class Solution(object):
#     def insert(self, intervals, newInterval):
#         """
#         :type intervals: List[List[int]]
#         :type newInterval: List[int]
#         :rtype: List[List[int]]
#         """
#         if not len(intervals):
#             return [newInterval]
#         res = []
#         [s, e] = newInterval
#         for i in range(len(intervals)):
#             curr = intervals[i]
#             if curr[1] < s:
#                 res.append(curr)
#             elif curr[0] > e:
#                 res.append([s, e])
#                 res.append(curr)
#                 s = float('inf')
#             else:
#                 s = min(s, curr[0])
#                 e = max(e, curr[1])
#         if s != float('inf'):
#             res.append([s, e])
#         return res


# class Solution(object):
#     def merge(self, intervals):
#         """
#         :type intervals: List[List[int]]
#         :rtype: List[List[int]]
#         """
#         if not len(intervals):
#             return intervals
#         intervals.sort(key=lambda x: x[0])
#         res = []
#         [s, e] = intervals[0]
#         for i in range(1, len(intervals)):
#             [s2, e2] = intervals[i]
#             if s > e2:
#                 res.append([s2, e2])
#             elif e < s2:
#                 res.append([s, e])
#                 s = s2
#                 e = e2
#             else:
#                 s = min(s, s2)
#                 e = max(e, e2)
#         res.append([s, e])
#         return res


# class Solution(object):
#     def asteroidCollision(self, asteroids):
#         """
#         :type asteroids: List[int]
#         :rtype: List[int]
#         """
#         res = []
#         for ast in asteroids:
#             while len(res) and ast < 0 < res[-1]:
#                 val = ast * -1
#                 if res[-1] < val:
#                     res.pop()
#                     continue
#                 elif res[-1] == val:
#                     res.pop()
#                 break
#             else:
#                 res.append(ast)
#         return res


# class Solution(object):
#     def calculate(self, s):
#         """
#         :type s: str
#         :rtype: int
#         """
#         if not s:
#             return "0"
#         stack, num, sign = [], 0, "+"
#         for i in xrange(len(s)):
#             if s[i].isdigit():
#                 num = num*10+ord(s[i])-ord("0")
#             if (not s[i].isdigit() and not s[i].isspace()) or i == len(s)-1:
#                 if sign == "-":
#                     stack.append(-num)
#                 elif sign == "+":
#                     stack.append(num)
#                 elif sign == "*":
#                     stack.append(stack.pop()*num)
#                 else:
#                     tmp = stack.pop()
#                     if tmp//num < 0 and tmp%num != 0:
#                         stack.append(tmp//num+1)
#                     else:
#                         stack.append(tmp//num)
#                 sign = s[i]
#                 num = 0
#         return sum(stack)


class Solution(object):
    def findCircleNum(self, isConnected):
        """
        :type isConnected: List[List[int]]
        :rtype: int
        """
