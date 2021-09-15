let dropdownIcon = document.querySelector('.header .links'),
    dropdownUl = document.querySelector('.header .links ul');

handleDropdownIconClick = () => {
    dropdownUl.classList.toggle('hide');
}

 document.onclick = (event) => {
    //  console.log(event.target.className);
        let clickedClass = event.target.className
      if(clickedClass !== 'icon' && clickedClass !== 'icon-bar'){
          dropdownUl.classList.add('hide');
       }
       

        //  console.log('nodeName', event.target.nodeName);
        //  console.log('tagName', event.target.tagName);
          console.log('className', event.target.className);

//     // console.log(event.target.className);

//     // console.log(event.currentTarget);
//     // console.log(event.target.value);
}