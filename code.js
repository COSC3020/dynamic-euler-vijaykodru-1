function e(n) {
    // Start with the first term, which is 1
    let result = 1.0;
    // 0! is 1
    let factorial = 1;
    //bottom up approach to find the value incrementing as we go
    for (let i = 1; i <= n; i++) {
        // Update the factorial for each i
        factorial *= i; 
         // Add the current term to the sum
        result += 1.0 / factorial;
    }
    return result;
}
