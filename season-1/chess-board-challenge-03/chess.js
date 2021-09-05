let body = document.getElementsByTagName('body')[0]


let gobalArr=[]
let mainDiv= document.createElement('div')
mainDiv.classList.add('main-div')


const chessArray =()=>{
        for(var i=1;i<=8; i++){
            for(var j=1; j<=8;j++){
                gobalArr.push([i,j])
            }
        }
}
// console.log("global Array",gobalArr)
let flag ="black"
let count=1;
const chessBoxes=()=>{
    for(var i=0; i<gobalArr.length; i++){
        let divs= document.createElement('div')
        divs.classList.add('chess-boxes');
        divs.id=`${gobalArr[i][0]}_${gobalArr[i][1]}`
            
        if(flag=="white"){
            flag="black"
        }
        else{
            flag="white"
        }
        if(i>1){
            if(gobalArr[i][0]!=gobalArr[i-1][0]){
                if(flag=="white"){
                    flag="black"
                }
                else{
                    flag="white"
                }
            }
        }
        divs.classList.add(flag)
        count++
        mainDiv.append(divs)
    }
}

const globalArrayClicked =()=>{
    var clickedElem = document.getElementsByClassName('chess-boxes')
    var clickedElemArr = Array.from(clickedElem)
    clickedElemArr.forEach((item, index)=>{
        item.addEventListener('click', ()=>{
            console.log(gobalArr[index])
            traverseArray.push(gobalArr[index])
            topRight(gobalArr[index])
            topLeft(gobalArr[index])
            bottomLeft(gobalArr[index])
            bottomRight(gobalArr[index])
            console.log(traverseArray)
             highlightingBoxes(traverseArray)
        })
    })

}
let traverseArray=[]
const topRight=(value)=>{
    // console.log(value)
    if(value[0]-1 && value[1]+1){
        value=[value[0]-1,value[1]+1]
        traverseArray.push(value)
    }else{
        return false
    }
    topRight(value)
}
const topLeft=(value)=>{
    // console.log(value,"topleft")
    if(value[0]-1 && value[1]-1){
        value= [value[0]-1 , value[1]-1]
        traverseArray.push(value)
    }else{return false}
    topLeft(value)
}
const bottomLeft=(value)=>{
    if(value[0]+1 && value[1]-1){
        value=[value[0]+1 , value[1]-1]
        traverseArray.push(value)
    }else{return false}
    bottomLeft(value)
}
const bottomRight=(value)=>{
    // console.log(value)
    if(value[0]+1 && value[1]+1 && (value[0]+1)<=8 && (value[1]+1)<=8){
        value=[value[0]+1 , value[1]+1]
        traverseArray.push(value)
    }else{return false}
    bottomRight(value)
}

const highlightingBoxes=(array)=>{
    array=array.map(item=>{
        item=`${item[0]}${item[1]}`
        return item
        //format = 12
    })
    console.log(array)
    var clickedElem= document.getElementsByClassName('chess-boxes')
    clickedElemArr=Array.from(clickedElem)
    //  console.log(clickedElemArr)
     clickedElemArr.forEach((item, index)=>{
         console.log(item,item.attributes[1].value,array.includes(item.attributes[1].value))
        if(array.includes(item.attributes[1].value.split('_').join(""))){
            item.classList.add('highlight')
        }
     })
    
}

body.append(mainDiv)
chessArray()
chessBoxes()
// clicked()
globalArrayClicked()
topRight()
topLeft()
bottomLeft()
bottomRight()
highlightingBoxes()


