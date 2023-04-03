
function hamburgerMenu(panelBtn, panel, menuLink) { 

    const d = document; 
    
    d.addEventListener('click', (event) => { 
  
      if(event.target.matches(panelBtn) || event.target.matches(`${panelBtn} *`)) { 
  
          d.querySelector(panel).classList.toggle('is-active'); 
          d.querySelector(panelBtn).classList.toggle('is-active'); 
          
      }
  
      if(event.target.matches(menuLink)){ 
  
        d.querySelector(panel).classList.remove('is-active'); 
        d.querySelector(panelBtn).classList.toggle('is-active'); 
  
  
      }
    }); 
  }

 hamburgerMenu('.panel-btn', '.panel', '.menu a')