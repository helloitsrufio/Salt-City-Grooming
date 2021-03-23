
//For second section
let mini = true;

function toggleSecondSection() {
    if (mini) {
        console.log('opening section')
        document.querySelector('.second-left-half').style.width = '75%';
        document.querySelector('.second-Middle-Half').style.width='12.5%';
        document.querySelector('.second-Right-Half').style.width='12.5%';
        this.mini=false;
    }else {
        console.log('closing section');
        document.querySelector('.second-left-half').style.width='33.3333%';
        document.querySelector('.second-Middle-Half').style.width='33.3333%';
        document.querySelector('.second-Right-Half').style.width='33.3333%';
        this.mini=true
    }
}