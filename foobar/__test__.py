# from datetime import datetime


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


def solution(s):
    num = int(s)
    accum = sum(range(1, num + 1))
    accum = int(accum * (2**(1/2)))
    accum -= num // 2
    return f"{accum}"


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


print(solution('77'))
