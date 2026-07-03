// ===== Miss Etah site scripts =====

// WhatsApp number (no + or spaces)
const WA_NUMBER = "919412430649";

// Sticky WhatsApp button
const waFloat = document.getElementById('waFloat');
const defaultMsg = "Hi, I am interested in participating in Miss Etah event powered by Dominate Infoline.";
waFloat.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(defaultMsg);

// Gallery tabs
document.querySelectorAll('#galleryTabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#galleryTabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const year = btn.dataset.year;
    document.querySelectorAll('.gallery-grid.year-view').forEach(g => {
      g.classList.toggle('active', g.dataset.year === year);
    });
  });
});

// Registration tabs
document.querySelectorAll('.reg-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.reg-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const panel = tab.dataset.panel;
    document.querySelectorAll('.reg-panel').forEach(p => {
      p.classList.toggle('active', p.id === 'panel-' + panel);
    });
  });
});

// Build a WhatsApp-ready message from a form's fields
function buildMessage(title, formEl) {
  const data = new FormData(formEl);
  let lines = [title, ""];
  for (const [key, value] of data.entries()) {
    if (value) lines.push(key + ": " + value);
  }
  return lines.join("\n");
}

// Wire a form to open WhatsApp with the filled-in details on submit
function wireForm(formId, title) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = buildMessage(title, form);
    const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  });
}

wireForm('form-main', "New entry — Miss Etah 2027");
wireForm('form-teen', "New entry — Miss Teen Etah Queen 2027 (submitted by parent/guardian)");
