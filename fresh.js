window.onload = function() {
    //creation of any element
    // let tempElement = document.createElement('div');
    // tempElement.textContent = 'My first content created';

    // let parentElement = document.getElementById('container');
    // parentElement.appendChild(tempElement);
    // console.log(tempElement);


    // let tempElement2 = document.createElement('div');
    // tempElement2.textContent = 'My first content created';
    // let parentElement = document.getElementById('container');
    // let headingElement = document.getElementById('heading2');
    // parentElement.insertBefore(tempElement2, headingElement)


    // let tempElement3 = document.createElement('div');
    // tempElement3.textContent = 'My first content created';
    // document.body.appendChild(tempElement3);



    // let tempElement4 = document.createElement('div');
    // tempElement4.textContent = 'My first content created';
    // let parentElement = document.getElementById('container');
    // document.body.insertBefore(tempElement4, parentElement)




    // let headingElement = document.getElementById('heading2');
    // let parentElement = document.getElementById('container');
    // document.body.insertBefore(headingElement, parentElement)


    // let headingElement = document.getElementById('heading2');
    // let parentElement = document.getElementById('container');
    // parentElement.removeChild(headingElement)



    // let tempElement = document.createElement('img');
    // tempElement.setAttribute('src', 'https://img.indiaforums.com/person/640x480/0/0003-salman-khan.jpg?c=7cP0B0');
    // document.body.appendChild(tempElement)


    let tempElement = document.createElement('img');
    tempElement.setAttribute('src', 'https://img.indiaforums.com/person/640x480/0/0003-salman-khan.jpg?c=7cP0B0');
    
    let divElement = document.createElement('div');
    divElement.classList.add('image-div');
    divElement.setAttribute('id', 'image1');
    divElement.appendChild(tempElement);
    
    document.body.appendChild(divElement); 

}


//HW - https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics/numbers-table.png