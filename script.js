const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    ///console.log('dragstart')

    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag(){
    //console.log('drag')
}

function dragend(){
    //console.log('dragend')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')


}

// soltar cards

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
});

function dragenter(){
    //console.log('Entrou')
}

function dragover(){
    this.classList.add('dragover')   

    const cardBeingDragged = document.querySelector('.is-dragging')

    console.log(cardBeingDragged);

    this.appendChild(cardBeingDragged)
}

function dragleave(){
    this.classList.remove('dragover')    
}

function drop(){
    //console.log('solto')
    
}