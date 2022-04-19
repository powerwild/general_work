from datetime import datetime


def solution(n):
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


print(solution(3))
print(solution(200))

def solution2(n):
    m = [[0 for i in range(n + 1)] for j in range(n + 1)]
    m[0][0] = 1  # base case
    for stair in range(1, n + 1):
	    for left in range(0, n + 1):
	        m[stair][left] = m[stair - 1][left]
	        if left >= stair:
	            m[stair][left] += m[stair - 1][left - stair]

    return m[n][n] -1
