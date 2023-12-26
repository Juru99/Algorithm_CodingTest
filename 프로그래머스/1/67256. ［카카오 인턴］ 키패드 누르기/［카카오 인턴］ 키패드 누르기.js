function solution(numbers, hand) {
    const positions = [
        [1, 3],
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [2, 2],
    ]
    const currentPosition = {
        L: [0, 3],
        R: [2, 3],
    }
    const calcDistance = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1)

    let results = ''

    for (const number of numbers) {
        const position = positions[number]
        let dir = hand === 'left' ? 'L' : 'R'

        // 1, 4, 7 => left
        if (number % 3 === 1) {
            dir = 'L'
        }
        // 3, 6, 9 => right
        else if (number && number % 3 === 0) {
            dir = 'R'
        }
        // 0, 2, 5, 8 => lr
        else if (!number || number % 3) {
            const leftDistance = calcDistance(currentPosition.L, position)
            const rightDistance = calcDistance(currentPosition.R, position)

            if (leftDistance < rightDistance) {
                dir = 'L'
            }
            else if (rightDistance < leftDistance) {
                dir = 'R'
            }
        }

        currentPosition[dir] = position
        results += dir
    }

    return results
}
