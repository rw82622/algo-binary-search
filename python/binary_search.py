def binary_search(num, arr):
    start = 0
    end = len(arr)-1
    
    while start <= end:
        mid = (start + end) // 2
        if num == arr[mid]:
            return mid
        elif num < arr[mid]:
            end = mid -1
        elif num > arr[mid]:
            start = mid + 1
    return -1