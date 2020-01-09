var x = prompt("Введите знак + - * или /")
var a = 10
var b = 2

if (x == "+"){
    alert(a+b)
}
else if (x == "-"){
    alert(a-b)
}
else if (x == "*"){
    alert(a*b)
}
else if (x == "/"){
    alert(a/b)
}

else {
    confirm("Неправильно введен символ, повторяю используйте только + - * и /")
}