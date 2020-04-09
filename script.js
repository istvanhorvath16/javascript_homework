//1.display in the console the numbers from 1 to 20

function numberCount(){
for(var i=1;i<=20;i++)
    {
       console.log(i);
    }
}
numberCount();

console.log("------------------");

//.2display in the console the odd numbers from 1 to 20

function oddNumbers(){
    for(var i=1;i<=20;i++)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    }
}

oddNumbers();

console.log("------------------");

//3.compute the sum of the elements of an array and display it in the console

function arraySum(array){
    var sum=0;
    for(var i=0;i<array.length;i++)
    {
     sum=sum+array[i];   
    }
    return sum;
}

var array= [5, 10, 15, 20, 25, 30, 35];

console.log(arraySum(array));

console.log("------------------");

//4.compute the maximum of the elements of an array and display it in the console 

function maxValue(array){
    var max=array[0];
    for(var i=0;i<array.length;i++)
    {
        if(array[i]>max)
        {
        max=array[i];
        }

    }
    return max;
}

var list= [1, 10, 3, 40, 5, 60, -12, 80];

console.log(maxValue(list));
console.log("------------------");

//5. compute how many times a certain element appears in an array

function elementAppearances(array, element){
    var appearances=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]==element)
        appearances+=1;
    }
    return appearances;
}

var anotherArray= [5, 3 , 2 , 5, 20, 5, 30, 5]
console.log(elementAppearances(anotherArray,5));
console.log("------------------");

//6. pattern challenge

function patternCreator(number){
    for(var i=0;i<number;i++)
    { 
        for(var j=0;j<number;j++)
        {
            if((i%2===0 && j%2===0)||(i%2!=0 && j%2!=0 ))
            console.log(0);
            else 
            console.log(1);
        }
        console.log("\n");
    }
}

patternCreator(4); //exemplul dat initial in exercitiu cu 4 rows/columns

console.log("------------------");

patternCreator(5); // exemplul dat la curs cu 5 rows/columns

console.log("------------------");

//7.hanoi towers 
function hanoiTower(disknumber, fromRod, toRod, auxRod)
{
    if(disknumber===1)
    {
        console.log("Moving Disk 1 from rod "+fromRod+" to rod "+toRod);
        return;
    }
    hanoiTower(disknumber-1,fromRod,auxRod,toRod);
    console.log("Moving Disk"+ disknumber + " from rod "+fromRod+" to rod "+toRod);
    hanoiTower(disknumber-1,auxRod,toRod,fromRod);
}

hanoiTower(3,"A","C","B"); //3 disks

console.log("------------------");

hanoiTower(4,"A","C","B"); //4 disks
//7. array sort challenge  (Without the library sort function obviously :)) 
// sortType=1 ==> Ascending SortType= 2 ==> Descending

function arraySort(array,sortType){
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length;j++)
            if(sortType===1)
            {
                if(array[i]<array[j])
                {
                    var aux= array[i];
                    array[i]=array[j];
                    array[j]=aux;

                }
            }
            else
            {
                if(array[i]>array[j])
                {
                    var aux= array[i];
                    array[i]=array[j];
                    array[j]=aux;
                }
            }
    }
}

var againAnotherarray= [5, 3, 12 , 50, 40 ,30, 22, 32];

console.log("Ascending Sort");
arraySort(againAnotherarray,1);
console.log(againAnotherarray);
console.log("Descending Sort");
arraySort(againAnotherarray,2);
console.log(againAnotherarray);


