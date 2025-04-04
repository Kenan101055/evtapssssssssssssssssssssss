let a = prompt('Palindrom yada nese yaz(bir soz yada eded daxil et)')

let b  = a.split('').reverse().join('')

if (a == b) {
  console.log(a + " palindromdur :)")
} else if (a !== b) {
    console.log(a +  " palindrom deyil :(")
}