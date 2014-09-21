# Seaweed-Dot-JS-Design-Doc

## Arrays

We have two arrays. Each array has seven beach names. They are named *beaches1* and *beaches2*.

## The Function

I'll have a function called buildBeaches that takes an array name as its input. At load time, it will take *beaches1* as its input. 

After that, this is how it'll work:

It will have a for loop that goes through *beaches1* and adds the beach names to a table. 

But we want the table to be styled a very specific way with alternating blue and white backgrounds. 

Inside the for loop will be an if statement. If beaches1[i] === false. Then add it dynamically to the table with a class id of blueBeach. Else add it dynamically to the table with a class id of whiteBeach. 

End of function.

## The *Next* button

There will also be a *Next* button on the page. When a user clicks this button it will trigger the function buildBeaches again, but this time with an input of beaches2[i].

