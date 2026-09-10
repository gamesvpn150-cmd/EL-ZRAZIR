const toast=document.getElementById("toast");
function showToast(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1500)}
document.querySelectorAll(".sound").forEach(btn=>{
 btn.addEventListener("click",()=>{
   const a=new Audio(btn.dataset.sound); a.volume=.8;
   a.play().catch(()=>showToast("ضع ملف الصوت داخل assets/sounds"));
   btn.animate([{transform:"scale(1)"},{transform:"scale(.96)"},{transform:"scale(1)"}],{duration:250});
   showToast("🔊 تم تشغيل المؤثر");
 });
});
