# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The code implemented has a worst case time complexity of $\Theta(n)$. This is because the for loop iterates until the condition i<=n is met which takes $O(n)$. The calculations that are done inside the for loop to update the factorial variable and the result takes constant time which are ignored asymptotically.



References: All this my own work. The factorial function in the original implementation is unnecessary because its value is recalculated from scratch for every recursive call in the e function, leading to redundant work. Instead, I have changed the implementation to use an iterative, bottom-up approach within the e function, where the factorial value is calculated and reused dynamically as we compute each term. This avoids redundant calculations and improves the efficiency of the function.

I used the same functions provided in the template for the test cases where I compare answer I get with the answer that is right according to the given code.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice