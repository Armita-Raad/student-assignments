// explain the difference between getBy, findBy, queryBy:

// overview: Queries are methods that Testing Library gives us to find elements on the page

// getBy: returns the first matching node for a query, and throws an error if there is 0 or multiple element matches. for making sure that an specific element exists on the screen we can use getBy.

// queryBy: is similar to getBy and returns a matching node for a query. However, it returns null if there is no matching element, and throws as error if there are multiple matches. with that difference, queryBy can be used to make sure a specific element is not on the screen.

// findBy: returns a promise, which resolves to a matching node when the element is found. The promise is rejected if no element is found after 1000ms timeout, which can be overwritten in the third parameter of the method. It will also be rejectedd if there are multiple element matches. It can be useful for making API calls and when an amount of time is needed for calling the element.

// Similarity: All this functions throw an error if more then one matches are found, unless the keyword 'All' is used (getAllby, queryAllBy, findAllBy). by doing this an array would be returned. Using this array would help us check the expected amount, a specific element and/or fire actions on some of them.

