const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+918969781655",
        href: "tel:+918969781655",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-mail",
        value: "ravimurmu578@gmail.com",
        href: "mailto:ravimurmu578@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "India",
        href: "#",
    },
];

const contactContent = contactList.map((ele)=>{
    return`
    <div class="media" key=${ele?.id}>
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>

                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href=${ele?.href}>${ele?.value}</a>
                        </div>
                    </div>
    `;
})
.join("");

if(media) media.innerHTML = contactContent;

// Send Contact Messsage

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;

const originalstyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow,
};

document.getElementById("contact-form").addEventListener("submit", (event) => {
 event.preventDefault();

 sendBtn.innerHTML = "Sending...";
 sendBtn.style.backgroundColor = "gray";
 sendBtn.style.color = "white";
 sendBtn.style.border = "none";
 sendBtn.style.boxShadow = "none";

 sendBtn.disabled = true;

 const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const phone = document.getElementById("phone").value;
 const message = document.getElementById("message").value;

 if(! name || !email || !phone || !message) {
    sendBtn.innerHTML  = originalText;

    Object.assign(sendBtn.style, originalstyle);

    sendBtn.disabled = true;

   return Toastify({
    text: "All Fields are Mandatory !",
    duration: 3000,
    gravity: "top",
    position: "center", 
    close: true,
    stopOnFocus: true,
    style: {
    background: "rgb(206, 16, 16)",
  },
   }).showToast();
 }

 emailjs.send("service_xvgaq5p", "template_6djdj0l", {
    name,
    email,
    phone,
    message, 
 })
  .then(
    () => {
       Toastify({
  text: "message sent !",
  duration: 2000,
  gravity: "top",
  position: "center", 
  close: true,
  stopOnFocus: true,
  style: {
    background: "rgb(9, 222, 38)",
  },
}).showToast();

    setTimeout(() => {
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style, originalstyle);

        sendBtn.disabled = false;
    },2000);
      }, 
      (error) => {
         Toastify({
  text: "Message Failed !",
  duration: 3000,
  gravity: "top",
  position: "center", 
  close: true,
  stopOnFocus: true,
  style: {
    background: "rgb(206, 16, 16)",
  },
}).showToast();

 setTimeout(() => {
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style, originalstyle);

        sendBtn.disabled = false;
    },2000);
     alert("Message Error !");
        console.log("FAILED...", error);
     });
});