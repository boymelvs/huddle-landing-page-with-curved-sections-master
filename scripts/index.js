"use strict";

const getSubscribe = () => {
   return document.getElementById("subscribe_email");
};

const warning = () => {
   return document.querySelector(".warning");
};

// check email if valid
const isEmailCorrect = (email) => {
   const format = /[^@ \t\r\n]+@[^@ \t\r\n]+\.(\w{2,3})+$/;
   return format.test(email);
};

let timeOut;
getSubscribe().addEventListener("input", (e) => {
   if (timeOut) {
      clearTimeout(timeOut);
   }

   timeOut = setTimeout(() => {
      if (!isEmailCorrect(e.target.value)) {
         warning().classList.add("active");
         return;
      }
   }, 750);

   warning().classList.remove("active");
});
