/**
 * Hi-Tech Autozone — Contact Page 2026 Interactive Features
 * 1. Category Quick-Chips Selector
 * 2. Copy Address to Clipboard with Toast Notification
 * 3. Interactive Inquiry Form Submission with WhatsApp Sync
 */

(function () {
  'use strict';

  function initContactPage() {
    // 1. Quick Category Selector Chips
    var chips = document.querySelectorAll('.hz-chip-pill, .hz-chip-btn');
    var hiddenInput = document.getElementById('hzSelectedCategory');
    var messageBox = document.getElementById('hzMessage');
    var waBtn = document.getElementById('hzWaDynamicBtn');

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        this.classList.add('active');
        var cat = this.getAttribute('data-category') || 'Car Accessories';
        if (hiddenInput) {
          hiddenInput.value = cat;
        }
        if (messageBox && (!messageBox.value || messageBox.value.indexOf('Inquiring about') === 0)) {
          messageBox.placeholder = 'Inquiring about ' + cat + '. What are your vehicle details & preferences?';
        }
        if (waBtn) {
          var phone = '919940917758';
          var text = encodeURIComponent('Hi Hi-Tech Autozone, I want to inquire about ' + cat);
          waBtn.href = 'https://wa.me/' + phone + '?text=' + text;
        }
      });
    });

    // 2. Form Submit Handler
    var form = document.getElementById('hzContactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        window.submitHzContactForm();
      });
    }
  }

  // 3. Global helpers exposed on window
  window.copyAddressToClipboard = function () {
    var address = 'No. 173, 100 Feet Road, Mudaliarpet, Near Sunway Hotel, Puducherry - 605004';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(showToast).catch(function () {
        fallbackCopy(address);
      });
    } else {
      fallbackCopy(address);
    }
  };

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      alert('Address: ' + text);
    }
    document.body.removeChild(ta);
  }

  function showToast() {
    var toast = document.getElementById('hzToast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(function () {
        toast.classList.remove('show');
      }, 3500);
    }
  }

  window.submitHzContactForm = function () {
    var fname = (document.getElementById('hzFirstName') && document.getElementById('hzFirstName').value) || 'Valued Customer';
    var phone = (document.getElementById('hzPhone') && document.getElementById('hzPhone').value) || '';
    var car = (document.getElementById('hzCarModel') && document.getElementById('hzCarModel').value) || 'your vehicle';
    var cat = (document.getElementById('hzSelectedCategory') && document.getElementById('hzSelectedCategory').value) || 'Car Accessories';
    var statusBox = document.getElementById('hzFormStatus');

    if (statusBox) {
      statusBox.className = 'hz-status-msg';
      statusBox.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span><strong>Message Sent!</strong> Our specialist will contact you on ' + phone + ' regarding ' + cat + '.</span>';
      statusBox.style.display = 'flex';
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(function () {
      if (typeof window.confirm === 'function') {
        var wantWhatsApp = window.confirm('Would you like to instantly message our specialist on WhatsApp with your vehicle requirements?');
        if (wantWhatsApp) {
          var msg = encodeURIComponent('Hi Hi-Tech Autozone, I just sent an inquiry for ' + cat + ' (' + car + '). Name: ' + fname + ', Phone: ' + phone);
          window.open('https://wa.me/919940917758?text=' + msg, '_blank');
        }
      }
    }, 1000);
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactPage);
  } else {
    initContactPage();
  }
})();
