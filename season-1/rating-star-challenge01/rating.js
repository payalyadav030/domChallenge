function Star(el, count, callback) {
	// Write a logic to create star rating problem
  var starElement = document.getElementById('star')
  // console.log(starElement)
  let starTag =  `<i  id ="starr" class="fa fa-star-o"></i>`
  let allStar = ''
  let numValue = [1,2,3,4,5]
  var flag=false;
  var globalIndex;
  numValue.forEach(()=>{
  	allStar = allStar+starTag
  })
  
// console.log(allStar) 
starElement.innerHTML=allStar

var hoverElem = document.getElementsByClassName('fa-star-o')
var allElem = Array.from(hoverElem)
const colorAllStarBeforeHoverElement = (index) => {
  allElem.forEach((item,ind)=>{
    if(index>ind){
      item.classList.remove('fa-star-o')
      item.classList.add('fa-star')
    }

  })
}
const removeColorAllStarBeforeHoverElement = () => {
  if(flag==true){
    allElem.forEach((item, index)=>{
      if(index>globalIndex){
        item.classList.remove('fa-star')
        item.classList.add('fa-star-o')
      }
    })
  }
  else{
    allElem.forEach((item,ind)=>{
      // console.log(item,ind)
         item.classList.remove('fa-star')
         item.classList.add('fa-star-o')
     })
  }
 
}
allElem.forEach((item,index)=>{
  item.addEventListener('mouseover',(val)=>{
    item.classList.remove('fa-star-o')
    item.classList.add('fa-star')
    colorAllStarBeforeHoverElement(index)
  })
  
  item.addEventListener('mouseout',(val)=>{
    
    // item.classList.remove('fa-star')
    // item.classList.add('fa-star-o')
    removeColorAllStarBeforeHoverElement()
  })
})

allElem.forEach((item, index)=>{
  item.addEventListener('click',()=>{
   flag=true;
   globalIndex=index
    // console.log(item)
    item.classList.add('fa-star')
     removeColorAllStarBeforeHoverElement()
  })
})

}

function getStar(value){
  document.getElementById("display-star").innerHTML = value;
}
new Star("#star", 5, getStar);