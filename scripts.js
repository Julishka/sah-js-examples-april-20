//Third part:

//all jquery expressions looks like this:
//$('css selector').action()
//in js ; is not essential, but can be used

$('h1').text('This is done by <em>JavaScript</em>!'); // because of .text, everything is considered a sigle text
$('h1').html('This is done by <em>JavaScript</em>!'); // this way I can include HTML
$('h2').toggleClass('blue'); //because of .toggleClass, it cannot be anything but just a class
//$('h2').toggleClass('blue'); if there is 2, it will remove it, if 3, applies again

let name = 'Juli';
let age = 30;

age = age + 5;

function myLittleFunction() {
    //any kind of JavaScript command
    //condition: number of ps is smaler than 5
    // <, >, <=, >=, ===, !==
    if ($('p').length === 5) {//== is okay, but === used more frequently; exactly not equal is !==
        $('main').append('<p id="">A p is appended in a main</p>'); //padding and border not applied for this if this happens later
    } else {
        console.log('We reached the maximum paragraph number');
    }
    
    $('p').css('border', '1px solid red'); //can change any css rules, but have to use the '',
    $('p').css('padding', '5px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove(); //use pseudo selector to remove only last one
}); //most often used pattern javascript handling click

//Fourth part:

//if (condition that true or false) {
    //condition is true
//} else {
    //condition is false
//}

let colors = ['paleturquoise', 'turquoise', 'mediumturquoise', 'lightseagreen', 'darkcyan'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i++) {
    console.log(i);    
} //type for and select the second one, the structure will appear

/*$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>')
$('.box:last-child').css('background', colors[4]);*/

console.log('Script file is loaded') //this is a developer tool

// First part:

// 1+1
// 2
// 12-5
// 7
// 4*3
// 12
// 15/6
// 2.5
// 15/6;
// 2.5
// 17*12;
// 204
// let age;
// undefined
// age = 34
// 34
// age + 5
// 39
// age = 35
// 35
// age = 55
// 55
// age/5
// 11
// age=34
// 34
// age = 48 / 8
// 6
// let numberOfLegs = 4
// undefined
// numberOfLegs * 2
// 8
// numberOfLegs = 2
// 2
// numberOfLegs
// 2
// let name = Adam
// VM1863:1 Uncaught ReferenceError: Adam is not defined
//     at <anonymous>:1:12
// (anonymous) @ VM1863:1
// age / 3
// 2
// anotherAge / 3
// VM1964:1 Uncaught ReferenceError: anotherAge is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1964:1
// name = 'Adam'
// VM2030:1 Uncaught ReferenceError: Cannot access 'name' before initialization
//     at <anonymous>:1:6
// (anonymous) @ VM2030:1
// let name = 'Adam'
// undefined
// name
// "Adam"
// name = "Egg"
// "Egg"
// name = `StayAtHome`
// "StayAtHome"
// let sentence = "That person's cat."
// undefined
// sentence = 'He said: "Ok."'
// "He said: "Ok.""
// let backtick = `backtick`
// undefined
// let oldEnoughToDrive = true
// undefined
// 34 + 5
// 39
// 'Hello, ' + name
// "Hello, StayAtHome"
// 'Hello, ' + name
// "Hello, StayAtHome"
// 'Hello, ' + name + 43 + ' another string'
// "Hello, StayAtHome43 another string"
// '11' + '23'
// "1123"
// true && true
// true
// true && false
// false
// false && false
// false
// true || true
// true
// true || false
// true
// false || false
// false
// true && (false || (true && false))
// false
// let post = "This is my first post"
// undefined
// let post2 = "This is my second post"
// undefined
// let color1 = "orange"
// undefined
// let color2 = "blue"
// undefined
// let colors = ["orange", "blue", "green"]
// undefined
// "We have a 10 minute break until 16:10"
// "We have a 10 minute break until 16:10"
// colors
// (3) ["orange", "blue", "green"]
// colors[0]
// "orange"
// colors[1]
// "blue"
// colors[2]
// "green"
// let pickedColor = 2
// undefined
// colors[pickedColor]
// "green"
// colors[1] = 'yellow'
// "yellow"
// colors
// (3) ["orange", "yellow", "green"]
// colors.length
// 3
// name
// "StayAtHome"
// name.length
// 10
// colors[3] = 'lime'
// "lime"
// colors
// (4) ["orange", "yellow", "green", "lime"]
// colors.push('purple')
// 5
// colors
// (5) ["orange", "yellow", "green", "lime", "purple"]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"length: 5__proto__: Array(0)
// colors[colors.length] = 'cyan'
// "cyan"
// colors
// (6) ["orange", "yellow", "green", "lime", "purple", "cyan"]
// colors.push(colors)
// 7
// colors
// (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)length: 7__proto__: Array(0)
// let notGoodExample = ['text', 123, true]
// undefined
// let person = {
//   name: 'Adam',
//   age: 34,
//   favoriteColors: colors,
//   oldEnoughToDrive: true
// }
// undefined
// person
// {name: "Adam", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}age: 34favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)name: "Adam"oldEnoughToDrive: true__proto__: Object
// 'Hello, dear ' + person.name
// "Hello, dear Adam"
// person.name = 'Peti'
// "Peti"
// person
// {name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}age: 34favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]food: "pizza"name: "Peti"oldEnoughToDrive: true__proto__: Object
// person.food = 'pizza'
// "pizza"
// person
// {name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}