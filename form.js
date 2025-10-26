// form.js - robust registration form handler (works for modal or page)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  if (!form) return;

  // create an inline error container if one doesn't already exist
  let errorBox = form.querySelector(".form-errors");
  if (!errorBox) {
    errorBox = document.createElement("div");
    errorBox.className = "form-errors";
    errorBox.setAttribute("aria-live", "polite");
    form.insertBefore(errorBox, form.firstChild);
  }

  const qs = sel => form.querySelector(sel);
  const usernameInput = qs("#username");
  const emailInput = qs("#email");
  const passwordInput = qs("#password");
  const confirmPasswordInput = qs("#confirm-password");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showErrors(errors) {
    errorBox.innerHTML = "";
    const ul = document.createElement("ul");
    ul.className = "form-errors-list";
    errors.forEach(msg => {
      const li = document.createElement("li");
      li.textContent = msg;
      ul.appendChild(li);
    });
    errorBox.appendChild(ul);
    // focus first invalid field for accessibility
    const firstInvalid = form.querySelector(".invalid, input:invalid, .form-errors-focus");
    if (firstInvalid) firstInvalid.focus && firstInvalid.focus();
  }

  function clearErrors() {
    errorBox.innerHTML = "";
    form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
  }

  function isRealSubmitTarget() {
    const a = (form.getAttribute("action") || "").trim();
    return a !== "" && a !== "#";
  }

  function closeModalIfAny() {
    // look for modal ancestor (reg-modal or modal-panel)
    const modal = form.closest("#reg-modal") || document.getElementById("reg-modal");
    if (modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  }

  form.addEventListener("submit", function (event) {
    clearErrors();
    const errors = [];

    // Username
    if (!usernameInput || usernameInput.value.trim().length < 3) {
      errors.push("Username must be at least 3 characters long.");
      usernameInput && usernameInput.classList.add("invalid");
    }

    // Email
    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
      emailInput && emailInput.classList.add("invalid");
    }

    // Password length
    if (!passwordInput || passwordInput.value.length < 6) {
      errors.push("Password must be at least 6 characters long.");
      passwordInput && passwordInput.classList.add("invalid");
    }

    // Password match
    if (!confirmPasswordInput || passwordInput.value !== confirmPasswordInput.value) {
      errors.push("Passwords do not match.");
      confirmPasswordInput && confirmPasswordInput.classList.add("invalid");
    }

    if (errors.length > 0) {
      event.preventDefault();
      showErrors(errors);
      return;
    }

    // no client-side errors — proceed:
    // If the form has a real action, allow default submit (server will handle)
    if (isRealSubmitTarget()) {
      // let the browser submit the form normally
      return;
    }

    // Otherwise (action="#" or missing) prevent default and show success (useful for testing or modal)
    event.preventDefault();
    // show a success message inside the form
    form.innerHTML = `
      <div class="form-container form-success">
        <h2>Thanks for registering!</h2>
        <p class="form-help">Check your email for a confirmation link (this is a demo response).</p>
        <p><a href="index.html" class="create-account-link">Return to home</a></p>
      </div>
    `;
    // if modal, close after a short delay (they'll still see the success message briefly)
    setTimeout(closeModalIfAny, 1200);
  });
});
