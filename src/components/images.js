const images = {};

function importAll(){
    const headings = ['beauty','death','family','fitness','funny','leadership','learning','life','success'];
    
    for (let val of headings) {
        images[val] = (require(`./images/${val}.jpg`));
    }
}

importAll();

export default images;