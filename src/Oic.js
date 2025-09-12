class Oic{
    constructor(){
        
    }

    ce(parent, mArray, element) {
        mArray.forEach((elementId, index)=>{
            const cardChild = document.createElement('div');
            cardChild.id = elementId;
            parent.appendChild(cardChild);
    });
}
}

export default Oic;