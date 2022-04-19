from datetime import datetime


def my_solution(n):
    hash_map = {}
    for i in range(n+1):
        for j in range(n+1):
            hash_map[str(i)+str(j)] = 0
    hash_map['00'] = 1
    for step in range(1, n+1):
        for prev in range(n+1):
            hash_map[str(step)+str(prev)] = hash_map[str(step-1)+str(prev)]
            if prev >= step:
                hash_map[str(step)+str(prev)] += hash_map[str(step-1)+str(prev-step)]
    return hash_map[str(n)+str(n)] - 1


def ref_solution(n):
    m = [[0 for i in range(n + 1)] for j in range(n + 1)]
    m[0][0] = 1  # base case
    for stair in range(1, n + 1):
	    for left in range(0, n + 1):
	        m[stair][left] = m[stair - 1][left]
	        if left >= stair:
	            m[stair][left] += m[stair - 1][left - stair]

    return m[n][n] -1




#(17, 4)
#17 18 19 20
#21 22 23
#25 26
#29


def queue_solution(start, length):
    def bit(num):
        x = num % 4
        return num if x == 0 else 1 if x == 1 else num+1 if x == 2 else 0

    xor = bit(start + (2 * (length - 1)))
    if start >= 2:
        xor ^= bit(start - 1)
    for i in range(length - 2):
        y = length - i - 2
        z = start + (length * (i + 2) - 1)
        xor ^= bit(y + z) ^ bit(z)
    return xor
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



print(queue_solution(17, 4))
