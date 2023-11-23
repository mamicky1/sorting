for i from 1 to n-1:
    key = arr[i]
    j = i - 1
    
    // Move elements of arr[0..i-1] that are greater than key
    // to one position ahead of their current position
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j = j - 1
    
    arr[j + 1] = key
