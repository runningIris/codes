from __future__ import print_function
import random

def bogosort(collection):
    def isSorted(collection):
        if len(collection) < 2:
            return True
        for i in range(len(collection) - 1):
            if collection[i] > collection[i + 1]:
                return False
        return True

    while not isSorted(collection):
        random.shuffle(collection)
    return collection

if __name__ == '__main__':
    import sys

    if sys.version_info.major < 3:
        input_function = raw_input
    else:
        input_function = input

    user_input = input_function('Enter numbers seperated by a comma: \n')
    unsorted = [int(item) for item in user_input.split(',')]
    print(bogosort(unsorted))


