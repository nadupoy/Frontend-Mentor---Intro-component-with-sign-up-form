(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n="/images/icon-error.svg";function d(a){let s=document.getElementsByClassName("input-textbox"),i=document.querySelector("[type='email']");for(let r of s)if(r.value==!1){let l=r.nextElementSibling,c=l.nextElementSibling;l.style.display="block",c.style.visibility="visible",r.style.borderColor="hsl(0, 100%, 74%)",a.preventDefault()}let o="[a-zA-Z0-9]+@[a-z]+.com",e=new RegExp(o),t=i.value;if(e.test(t)===!1){let r=i.nextElementSibling,l=r.nextElementSibling;r.style.display="block",l.style.visibility="visible",i.style.borderColor="hsl(0, 100%, 74%)",a.preventDefault()}}document.querySelector("#app").innerHTML=`
  <main>
  <section class="intro-card">
  <h1>Learn to code by watching others</h1>
  <p>
  See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
  </p>
  </section>

  <section class="form-card">
  <div class="free-trial">
  <p>
  <b>Try it free 7 days</b> then $20/mo. thereafter
  </p>
  </div>

  <div class="form">
  <form id="form">
  <div class="input-field">
  <input type="text" placeholder="First Name" class="input-textbox">
  <img src="${n}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>First Name cannot be empty</em></p>
  </div>

  <div class="input-field">
  <input type="text" placeholder="Last Name" class="input-textbox">
  <img src="${n}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>Last Name cannot be empty</em></p>
  </div>

  <div class="input-field">
  <input type="email" placeholder="Email Address" class="input-textbox">
  <img src="${n}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>Looks like this is not an email</em></p>
  </div>
  
  <div class="input-field">
  <input type="password" placeholder="Password" class="input-textbox">
  <img src="${n}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>Password cannot be empty</em></p>
  </div>

  <input type="submit" formnovalidate value="CLAIM YOUR FREE TRIAL">
  </form>

  <p class="agreement">
  By clicking the button you are agreeing to our <b>Terms and Services</b>
  </p>
  </div>
  </section>
  </main>

  <footer>
  <p>
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> | Coded by <a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>
  </p>
  </footer>
`;let p=document.getElementById("form");p.addEventListener("submit",d);
