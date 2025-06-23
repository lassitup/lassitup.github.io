 //Collapse / Expand All Boxes

let allBoxesButton = document.getElementById('expand_collapse');

function expandCollapseAll () {

    let allBoxes = document.getElementsByClassName('post');
    
    if(allBoxes[0].hidden){
        
        for (post of allBoxes) {
            post.hidden = false;
            post.parentNode.lastElementChild.innerHTML = 'Hide Post';
        }
    }
    else {
        for (post of allBoxes) {
            post.hidden = true;
            post.parentNode.lastElementChild.innerHTML = 'Show Post';
        }
    }
}

allBoxesButton.addEventListener('click', expandCollapseAll);



// Expand / Collapse Single Box


function hide_expand_post(event) {
    
    let post = event.target;
    let paragraph = post.parentNode.querySelector('p');

    if(paragraph.hidden)
    {
        paragraph.hidden = false;
        post.innerHTML = 'Hide Post';
    }
    else
    {
        paragraph.hidden = true;
        post.innerHTML = 'Show Post';
    }

}


// Assign event listener to all blog buttons

 function assignListeners() {
        let allButtons = document.getElementsByClassName('button');

        for (button of allButtons) {
             button.addEventListener('click', hide_expand_post);
        }
}

assignListeners();


// Expand / Collapse Proposal Box


let proposalButton = document.getElementById('proposalButton');

function hide_expand_proposal(event) {
    
    let post = event.target;
    let paragraph = post.parentNode.querySelector('p');

    if(paragraph.hidden)
    {
        paragraph.hidden = false;
        post.innerHTML = 'Hide Proposal';
    }
    else
    {
        paragraph.hidden = true;
        post.innerHTML = 'Show Proposal';
    }

}


proposalButton.addEventListener('click', hide_expand_proposal);