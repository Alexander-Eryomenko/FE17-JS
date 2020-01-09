var result = 0
var str = "Привет, Мир!"
for (var i = 0; i < str.length; i++)
    result += i + str.charCodeAt()
    alert(result)
