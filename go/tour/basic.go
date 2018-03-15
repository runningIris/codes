package main
import (
    "fmt"
    "math"
)

func add (x, y int) (int) {
    return x + y
}

func swap (x, y int) (a, b int) {
    a = y
    b = x
    return
}


func main () {
    var c, python bool
    var i int
    a, b := swap(5,1)
    fmt.Println(i, c, python)
    fmt.Println(a, b)
    fmt.Println(add(2, 4))
    fmt.Printf("Now you have a %g problem.\n", math.Sqrt(20))
}
