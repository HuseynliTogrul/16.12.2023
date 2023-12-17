// 1-dən 100-ə qədər ədədləri console-da yazmaq. Əgər ədəd 3-ə tam bölünürsə 
// console-da həmin ədədin əvəzinə Fizz, əgər 5-ə tam bölünürsə Buzz, 
// əgər 15-ə tam bölünürsə FizzBuzz yazmaq

for (let i = 1; i < 100; i++) {

    if (i % 15 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }else{
        console.log(i)
    }
}