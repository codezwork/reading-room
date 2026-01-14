// Function to switch views (Dashboard -> Members -> Finance)
function switchView(viewId, btnElement) {
    // 1. Hide all views
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.add('hidden');
    });

    // 2. Show selected view
    document.getElementById(viewId).classList.remove('hidden');

    // 3. Update Nav Bar Icons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-[#FF6B00]'); // Remove active color
        btn.classList.add('text-gray-400');    // Make gray
        
        // Reset text weight
        const span = btn.querySelector('span');
        if(span) {
            span.classList.remove('font-bold');
            span.classList.add('font-medium');
        }
    });

    // 4. Highlight clicked button
    if(btnElement) {
        btnElement.classList.remove('text-gray-400');
        btnElement.classList.add('text-[#FF6B00]');
        
        const span = btnElement.querySelector('span');
        if(span) {
            span.classList.remove('font-medium');
            span.classList.add('font-bold');
        }
    }
}

// Modal Logic
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW Registered!', reg))
      .catch(err => console.log('SW Failed', err));
  });
}