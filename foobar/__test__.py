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

class Solution(object):
    def isBalanced(self, root):
        def traverse(node):
            if not node:
                return 0
            left = traverse(node.left)
            right = traverse(node.right)
            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1
            return max(left, right) + 1
        return traverse(root) != -1
