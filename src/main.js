import "./style.css";
import errorIcon from "/images/icon-error.svg";
import { submitForm } from "./script.js";

document.querySelector("#app").innerHTML = `
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
  <img src="${errorIcon}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>First Name cannot be empty</em></p>
  </div>

  <div class="input-field">
  <input type="text" placeholder="Last Name" class="input-textbox">
  <img src="${errorIcon}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>Last Name cannot be empty</em></p>
  </div>

  <div class="input-field">
  <input type="email" placeholder="Email Address" class="input-textbox">
  <img src="${errorIcon}" alt="error icon" class="error-icon" />
  <p class="error-message"><em>Looks like this is not an email</em></p>
  </div>
  
  <div class="input-field">
  <input type="password" placeholder="Password" class="input-textbox">
  <img src="${errorIcon}" alt="error icon" class="error-icon" />
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
`;

let form = document.getElementById("form");

form.addEventListener("submit", submitForm);
