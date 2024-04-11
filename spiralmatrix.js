function spiral(n) {

    let result = []
    for (i = 0; i < n; i++) result.push([])

    let counter = 1, startRow = 0, endRow = n - 1, startCol = 0, endCol = n-1

    while (startRow < endRow && startCol <= endCol) {
        // top
        for (i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter
            counter++
        }
        startRow++

        // right
        for (i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter
            counter++
        }
        endCol--

        // bottom
        for (i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter
            counter++
        }
        endRow--

        // left
        for (i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter++
        }
        startCol++

    }

    return result


}

console.log(spiral(14))