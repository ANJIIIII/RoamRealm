

//image slider home page start
let currentIndex = 0;
const images = document.querySelectorAll('#slider img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== index);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});


setInterval(() => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}, 5000); 

//image slider home page end

//scrolling effect navbar start

const navbar1=document.getElementById("navbar")
const navbarlinks=document.querySelectorAll(".navbarlinks");
const line=document.getElementById('line');

const alternavbarheight = () => {
  if (window.innerWidth >= "1024") {
    if (window.scrollY >= "50") {
      line.classList.add('hidden');
      navbar1.style.height = "80px";
      navbar1.style.backgroundColor = "#F2F2F2";
      navbar1.style.transitionDuration = "1s";
      navbar1.style.position = "fixed";
      navbar1.style.top = "0";
      navbar1.style.width = "full";
      navbarlinks.forEach((item) => {
        item.style.color = "black";
      });
    } else {
      line.classList.remove('hidden');
      navbar1.style.height = "100px";
      navbar1.style.backgroundColor = "transparent";
      navbar1.style.transitionDuration = "1s";
      navbar1.style.position = "static";
      navbarlinks.forEach((item) => {
        item.style.color = "white";
      });

    }
  }
};

window.addEventListener("scroll", alternavbarheight);

alternavbarheight();

//scrolling effect navbar start end

//nav dropdown

const mydashdrop=document.getElementById("mydashdrop");
const mydashbtn=document.getElementById("mydashbtn");
const pages=document.getElementById("pages");
const mydashdrop2=document.getElementById("mydashdrop2");

 //nav2 pages
 pages.addEventListener("mouseover", () => {
  mydashdrop2.classList.remove('hidden');
  mydashdrop2.classList.add('grid');
});

pages.addEventListener("mouseout", () => {
  mydashdrop2.classList.remove('grid');
  mydashdrop2.classList.add('hidden');
});

//dropdown nav1
function toggledash() {
  if(mydashdrop.classList.contains("grid")){
    mydashdrop.classList.remove('grid');
    mydashdrop.classList.add('hidden');
  }else{
    mydashdrop.classList.remove('hidden');
    mydashdrop.classList.add('grid');
  }
}

mydashbtn.addEventListener('click', toggledash);


//hamburger
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('phoneNav');

function toggleNavbar() {
  navbar.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleNavbar);



//guide section  start
const guide = document.querySelectorAll(".guide");
guide.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.children[0].classList.add("bg-gradient-to-bottom");
    item.children[0].classList.replace("bg-bottom", "bg-top");
    item.children[2].classList.add("bg-gradient-to-top");
    item.children[2].classList.replace("bg-top", "bg-bottom");
    item.children[2].classList.add("text-white");
   
  });

  item.addEventListener("mouseout", () => {
    item.children[0].classList.remove("bg-gradient-to-bottom");
    item.children[0].classList.replace("bg-top", "bg-bottom");
    item.children[2].classList.remove("bg-gradient-to-top");
    item.children[2].classList.replace("bg-bottom", "bg-top");
    item.children[2].classList.remove("text-white");
   
  });
});

// guide section  start end

//   destination start

const destinationbutton = Array.from(
  document.querySelectorAll(".destinationbutton")
);
const destinationitem = Array.from(
  document.querySelectorAll(".destinationitem")
);
const destinationphoto = document.querySelectorAll(".destinationphoto")

const body = document.getElementsByTagName("body")[0];
const plus = Array.from(document.querySelectorAll(".plus"));
const destinationimageviewer = document.getElementById("destinationimageviewer");
const destinationimageviewerimage = document.getElementById("destinationimageviewerimage");


  
document.addEventListener('DOMContentLoaded', () => {
  const destinationphoto = document.querySelectorAll('.destinationphoto');

  destinationphoto.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      item.children[0].classList.replace('hidden', 'flex');
      item.children[1].classList.add('scale-150');
      item.children[2].classList.replace('top-[100%]', 'top-[50%]');
    });

    item.addEventListener('mouseout', () => {
      item.children[0].classList.replace('flex', 'hidden');
      item.children[1].classList.remove('scale-150');
      item.children[2].classList.replace('top-[50%]', 'top-[100%]');
    });
  });
});


const seephoto = (idx) => {
  destinationimageviewer.style.height =`${body.offsetHeight}px`;
  destinationimageviewer.style.width =`${body.offsetWidth}px`;

  destinationimageviewerimage.style.height = "300px";
  destinationimageviewerimage.style.width = "300px";
  destinationimageviewerimage.src = destinationphoto[idx].children[1].src;
  destinationimageviewerimage.style.top =`${window.scrollY + 100}px`;
};

plus.forEach((item, idx) => {
  item.addEventListener("click", ()=>seephoto(idx));
});

destinationimageviewer.addEventListener("click", () => {
  destinationimageviewer.style.height = 0;
  destinationimageviewer.style.width = 0;
  destinationimageviewerimage.style.borderWidth = "0";
});

destinationbutton.forEach((item, i) => {
  item.addEventListener("click", () => {
    destinationitem.forEach((item, idx) => {
      if (idx === i) destinationitem[idx].style.display = "flex";
      else destinationitem[idx].style.display = "none";
    });
  });
});

const reset = () => {
  destinationitem.forEach((item, idx) => {
    if (idx != 0) item.style.display = "none";
  });
};

reset();

//   destination end


// travel section starts

const travelitemimage = document.querySelectorAll(".travelitemimage");
const travelchain=Array.from(document.querySelectorAll(".travelchain"))

travelitemimage.forEach((item, idx) => {
  item.addEventListener("mouseover", () => {
    item.children[0].classList.add("scale-150");
    item.children[3].children[0].classList.replace('h-0','h-full');
    travelchain[idx].classList.remove("hidden")
    travelchain[idx].classList.add("block")

  });
  item.addEventListener("mouseout", () => {
    item.children[0].classList.remove("scale-150");
    item.children[3].children[0].classList.replace('h-full','h-0')
    travelchain[idx].classList.add("hidden")
    travelchain[idx].classList.remove("block")
  });
});
// travel section ends






// package section start
const packageslides = document.querySelectorAll(".packageslider > div");
const packageslider_container = document.querySelector(
  ".packageslider_container"
);
const packageslider = document.querySelector(".packageslider");

const packageprevBtn = document.querySelector(".PackageleftBtn");
const packagenextBtn = document.querySelector(".PackagerightBtn");

let packagecurrent = 4;
let packageitemwidth = 0;
let packageitemgap = 0;

if (window.innerWidth >= "1024") {
  packageitemwidth = 32;
  packageitemgap = 2;
} else if (window.innerWidth >= "640" && window.innerWidth < "1024") {
  packageitemwidth = 49;
  packageitemgap = 2;
} else {
  packageitemwidth = 100;
  packageitemgap = 0;
}
let totalwidth = packageitemgap + packageitemwidth;
packageslider.style.transform =`translateX(${-(totalwidth * 4)}%)`;

packageprevBtn.addEventListener("click", () => {
  if (packagecurrent < 0) {
    packagecurrent = packageslides.length - 5;

    packageslider.style.transform =`translateX(${
      -totalwidth * packagecurrent
    }%)`;
    return;
  }
  packageslider.style.transition = "1000ms ease-in-out transform";
  packagecurrent--;
  packageslider.style.transform =`translateX(${
    -totalwidth * packagecurrent
  }%)`;
});
packagenextBtn.addEventListener("click", () => {
  if (packagecurrent > packageslides.length - 1) {
    packagecurrent = 4;

    packageslider.style.transform =`translateX(${
      -totalwidth * packagecurrent
    }%)`;
    return;
  }
  packageslider.style.transition = "1000ms ease-in-out transform";
  packagecurrent++;
  packageslider.style.transform = `translateX(${
    -totalwidth * packagecurrent
  }%)`;
});

packageslider.addEventListener("transitionend", () => {
  if (packageslides[packagecurrent].classList.contains("first_img")) {
    packageslider.style.transition = "none";
    packagecurrent = packageslides.length - 5;
    packageslider.style.transform = `translateX(${
      -totalwidth * packagecurrent
    }%)`;
  }
  if (packageslides[packagecurrent].classList.contains("last_img")) {
    packageslider.style.transition = "none";
    packagecurrent = 4;
    packageslider.style.transform = `translateX(${
      -totalwidth * packagecurrent
    }%)`;
  }
});

const packageitemimage = document.querySelectorAll(".packageitemimage");

packageitemimage.forEach((item, idx) => {
  item.addEventListener("mouseover", () => {
    item.children[0].classList.add("scale-150");
    item.children[3].children[0].classList.replace('w-0','w-full')
    item.children[3].children[0].classList.replace('h-0','h-full')
   

  });
  item.addEventListener("mouseout", () => {
    item.children[0].classList.remove("scale-150");
    item.children[3].children[0].classList.replace('w-full','w-0')
    item.children[3].children[0].classList.replace('h-full','h-0')
   
  });
});
// package section end


// tourism section start
const tourismitem = Array.from(document.querySelectorAll(".tourismitem"));
const tourismimageviewer=document.getElementById("tourismimageviewer")
const tourismimageviewerimage=document.getElementById("tourismimageviewerimage")
const tourismplus=document.querySelectorAll(".tourismplus")
const tourismseephoto = (idx) => {
  tourismitem[idx].children[2].classList.add("hidden");
  tourismitem[idx].children[2].classList.remove("flex");
  tourismimageviewer.style.height =` ${body.offsetHeight}px`;
  tourismimageviewer.style.width =` ${body.offsetWidth}px`;

  tourismimageviewerimage.style.height = "300px";
  tourismimageviewerimage.style.width = "300px";
  tourismimageviewerimage.src =tourismitem[idx].children[0].src;
  tourismimageviewerimage.style.top = `${window.scrollY + 100}px`;

};

tourismplus.forEach((item, idx) => {
  item.addEventListener("click",()=>tourismseephoto(idx));
});

tourismimageviewer.addEventListener("click", () => {
  tourismimageviewer.style.height = 0;
  tourismimageviewer.style.width = 0;
  tourismimageviewerimage.style.borderWidth = "0";
});
tourismitem.forEach((item, idx) => {
  item.addEventListener("mouseover", () => {
    item.children[0].classList.add("scale-150");
    item.children[0].classList.add("mb-[-80px]");
    item.children[2].classList.remove("hidden");
    item.children[2].classList.add("flex");
  });
  item.addEventListener("mouseout", () => {
    item.children[0].classList.remove("scale-150");
    item.children[0].classList.remove("mb-[-80px]");
    item.children[2].classList.add("hidden");
    item.children[2].classList.remove("flex");
  });
});
// torism section ends


// explore world section starts
const world = document.querySelectorAll(".world");
const tour = Array.from(document.querySelectorAll(".tour"));
const tourbutton = Array.from(document.querySelectorAll(".tourbutton"));
tour[1].style.display = "none";
const viewtourcategory = (idx) => {
  tour.forEach((item, i) => {
    if (i === idx) item.style.display = "block";
    else item.style.display = "none";
  });
};

tourbutton.forEach((item, idx) => {
  item.addEventListener("click", () => {
    viewtourcategory(idx);
  });
});

world.forEach((item, idx) => {
  item.addEventListener("mouseover", () => {
    item.children[0].classList.add("scale-150");
    item.children[2].classList.remove("hidden");
    item.children[2].classList.add("flex");
  });
  item.addEventListener("mouseout", () => {
    item.children[0].classList.remove("scale-150");
    item.children[2].classList.add("hidden");
    item.children[2].classList.remove("flex");
  });
});

const internationaltourslides = document.querySelectorAll(
  ".internationaltourslider > div"
);
const internationaltourslider_container = document.querySelector(
  ".internationaltourslider_container"
);
const internationaltourslider = document.querySelector(
  ".internationaltourslider"
);

const internationaltourprevBtn = document.querySelector(
  ".internationaltourleftBtn"
);
const internationaltournextBtn = document.querySelector(
  ".internationaltourrightBtn"
);

let internationaltourcurrent = 5;
let internationaltouritemwidth = 0;
let internationaltouritemgap = 0;

if (window.innerWidth >= "1024") {
  internationaltouritemwidth = 32;
  internationaltouritemgap = 2;
} else if (window.innerWidth >= "640" && window.innerWidth < "1024") {
  internationaltouritemwidth = 49;
  internationaltouritemgap = 2;
} else {
  internationaltouritemwidth = 100;
  internationaltouritemgap = 0;
}
let internationaltouritemtotalwidth =
  internationaltouritemgap + internationaltouritemwidth;
internationaltourslider.style.transform = `translateX(${-(
  internationaltouritemtotalwidth * 5
)}%)`;

const nextinternationaltourslide = () => {
  if (internationaltourcurrent > internationaltourslides.length - 1) {
    internationaltourcurrent = 5;

    internationaltourslider.style.transform = `translateX(${
      -internationaltouritemtotalwidth * internationaltourcurrent
    }%)`;
    return;
  }
  internationaltourslider.style.transition = "1000ms ease-in-out transform";
  internationaltourcurrent++;
  internationaltourslider.style.transform = `translateX(${
    -internationaltouritemtotalwidth * internationaltourcurrent
  }%)`;
};
internationaltourprevBtn.addEventListener("click", nextinternationaltourslide);

const previousinternationaltourslide = () => {
  if (internationaltourcurrent < 0) {
    internationaltourcurrent = internationaltourslides.length - 6;

    internationaltourslider.style.transform = `translateX(${
      -internationaltouritemtotalwidth * internationaltourcurrent
    }%)`;
    return;
  }
  internationaltourslider.style.transition = "1000ms ease-in-out transform";
  internationaltourcurrent--;
  internationaltourslider.style.transform = `translateX(${
    -internationaltouritemtotalwidth * internationaltourcurrent
  }%)`;
};
internationaltournextBtn.addEventListener(
  "click",
  previousinternationaltourslide
);

internationaltourslider.addEventListener("transitionend", () => {
  if (
    internationaltourslides[internationaltourcurrent].classList.contains(
      "first_img"
    )
  ) {
    internationaltourslider.style.transition = "none";
    internationaltourcurrent = internationaltourslides.length - 6;
    internationaltourslider.style.transform =`translateX(${
      -internationaltouritemtotalwidth * internationaltourcurrent
    }%)`;
  }
  if (
    internationaltourslides[internationaltourcurrent].classList.contains(
      "last_img"
    )
  ) {
    internationaltourslider.style.transition = "none";
    internationaltourcurrent = 5;
    internationaltourslider.style.transform =`translateX(${
      -internationaltouritemtotalwidth * internationaltourcurrent
    }%)`;
  }
});

const autoslideinternationaltour = () => {
  nextinternationaltourslide();
};

const setautoslideinternationtour = setInterval(
  autoslideinternationaltour,
  3000
);

const internationaltour = document.getElementById("internationaltour");
internationaltour.addEventListener("visibilitychange", () => {
  if (internationaltour.style.display === "block")
    setautoslideinternationtour();
  else clearInterval(setautoslideinternationtour);
});

// explore world section ends

// client section starts
const clientslides = Array.from(document.querySelectorAll(".clientslider > div"));
const clientslider_container = document.querySelector(
  ".clientslider_container"
);
const clientslider = document.querySelector(".clientslider");

const clientprevBtn = document.querySelector(".clientleftBtn");
const clientnextBtn = document.querySelector(".clientrightBtn");

let clientcurrent = 4;
let clientitemwidth = 0;
let clientitemgap = 0;

if (window.innerWidth >= "1024") {
  clientitemwidth = 32;
  clientitemgap = 2;
} else if (window.innerWidth >= "640" && window.innerWidth < "1024") {
  clientitemwidth = 49;
  clientitemgap = 2;
} else {
  clientitemwidth = 100;
  clientitemgap = 0;
}
let clientitemtotalwidth = clientitemgap + clientitemwidth;
clientslider.style.transform = `translateX(${-(clientitemtotalwidth * 4)}%)`;

const changebackgroundcolor=()=>{
  clientslides.forEach((item)=>{
    if(item.children[0].classList.contains("text-white"))
      item.children[0].classList.remove("text-white") 
    if(item.children[0].classList.contains("bg-[#13357B]"))
    item.children[0].classList.replace("bg-[#13357B]","bg-[#F2F2F2]") 
  })
 

    

  if(clientcurrent+1<clientslides.length){
    clientslides[clientcurrent+1].children[0].classList.add("text-white") 
    clientslides[clientcurrent+1].children[0].classList.replace("bg-[#F2F2F2]","bg-[#13357B]") 
  }

 
}
const nextclientslide = () => {
  if (clientcurrent > clientslides.length - 1) {
    clientcurrent = 4;

    clientslider.style.transform = `translateX(${
      -clientitemtotalwidth * clientcurrent
    }%)`;
    return;
  }
  clientslider.style.transition = "1000ms ease-in-out transform";
  clientcurrent++;
  clientslider.style.transform = `translateX(${
    -clientitemtotalwidth * clientcurrent
  }%)`;
  changebackgroundcolor()
};

const previousclientslide = () => {
  if (clientcurrent < 0) {
    clientcurrent = clientslides.length - 5;

    clientslider.style.transform = `translateX(${
      -clientitemtotalwidth * clientcurrent
    }%)`;
    return;
  }
  clientslider.style.transition = "1000ms ease-in-out transform";
  clientcurrent--;
  clientslider.style.transform = `translateX(${
    -clientitemtotalwidth * clientcurrent
  }%)`;
 changebackgroundcolor()
};
clientnextBtn.addEventListener("click", nextclientslide);
clientprevBtn.addEventListener("click", previousclientslide);

clientslider.addEventListener("transitionend", () => {
  if (clientslides[clientcurrent].classList.contains("first_img")) {
    clientslider.style.transition = "none";
    clientcurrent = clientslides.length - 5;
    clientslider.style.transform = `translateX(${
      -clientitemtotalwidth * clientcurrent
    }%)`;
  changebackgroundcolor()
  }
  if (clientslides[clientcurrent].classList.contains("last_img")) {
    clientslider.style.transition = "none";
    clientcurrent = 4;
    clientslider.style.transform = `translateX(${
      -clientitemtotalwidth * clientcurrent
    }%)`;
     changebackgroundcolor()
  }
});
// client section ends
