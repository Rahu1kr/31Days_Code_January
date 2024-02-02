// All images in a 2D array
let image =[
    ["img1.jpg","img1.jpg","img1.jpg"], 
    ["img2.jpg","img2.jpg","img2.jpg"], 
    ["img3.jpg","img3.jpg","img3.jpg"], 
    ["img4.jpg","img4.jpg","img4.jpg"]
];

// Get Filter value 
document.querySelectorAll(".filter-item").forEach((element, elementIndex)=>{
    element.addEventListener('click', ()=>{
        if(elementIndex!=0)
        {
            showImageFiltered(elementIndex);
        }
        else{
            showAllImages();
        }
    });
});

// Function to show images according to filter selected
function showImageFiltered(index){
    document.getElementById("gallery-image-container").innerHTML="";
    removeOtherFilterSelectedCSS();
    document.getElementsByClassName("filter-item")[index].classList.add("filter-selected");
    for(let i=0; i<image[index-1].length; i++){
        let newElement = document.createElement("div");
        newElement.className = "gallery-item";
        let imageElement = document.createElement("img");
        imageElement.src = "Img/" + image[index-1][i];
        newElement.appendChild(imageElement);
        document.getElementById("gallery-image-container").appendChild(newElement);
    }
}

// Function to show all images
function showAllImages(){
    document.getElementById("gallery-image-container").innerHTML="";
    removeOtherFilterSelectedCSS();
    document.getElementsByClassName("filter-item")[0].classList.add("filter-selected");

    for(let i=0; i<image.length; i++){
        for(let j=0; j<image[i].length; j++){
            let newElement = document.createElement("div");
            newElement.className = "gallery-item";
            let imageElement = document.createElement("img");
            imageElement.src = "Img/"+ image[i][j];
            newElement.appendChild(imageElement);
            document.getElementById("gallery-image-container").appendChild(newElement);
        }
    }
}

function removeOtherFilterSelectedCSS(){
    let allFilters = document.getElementsByClassName("filter-item");
    for(let i=0; i<allFilters.length; i++){
        allFilters[i].classList.remove('filter-selected');
    }
}
window.onload = showAllImages();