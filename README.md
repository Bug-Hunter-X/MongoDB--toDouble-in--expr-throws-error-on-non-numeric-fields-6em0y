# MongoDB $toDouble in $expr Error
This repository demonstrates a bug encountered when using the `$toDouble` operator within the `$expr` operator in MongoDB.  The issue arises when the field being converted to a double is not a string representation of a number. The query throws an error rather than gracefully ignoring or handling the non-numeric cases.

## Bug Description
The problem is encountered when querying documents containing a `price` field that is not always a string that converts to a number.  The `$toDouble` operator within the `$expr` operator throws an error if it cannot convert the field to a double. This behavior can disrupt the entire query operation.  This bug is demonstrated in `bug.js` and is addressed in `bugSolution.js`.

## Solution
The issue is resolved by handling non-numeric `price` fields gracefully.  A solution is provided in `bugSolution.js` which uses `$cond` to check if `$price` is a number before applying `$toDouble`.