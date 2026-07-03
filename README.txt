MISS ETAH WEBSITE — FILE GUIDE
================================

HOW TO VIEW
- Double-click index.html to open the site in your browser.
- To publish it, upload this whole folder (keeping the same structure) to your
  web host — index.html must stay in the same folder as css/, js/ and assets/.

FOLDER STRUCTURE
  index.html            → the page itself
  css/style.css          → all styling (colors, fonts, layout)
  js/main.js              → the WhatsApp form logic, gallery tabs, register tabs
  assets/
    logo/logo.jpg              → Dominate Infoline logo (used in header + footer)
    intro-video/intro.mp4      → the intro video (hero background + About section)
    gallery/
      2018/photo-1.jpg
      2019/photo-1.jpg
      2020/photo-1.jpg
      2023/photo-1.jpg
      2024/photo-1.jpg
      2025/photo-1.jpg
      2026/photo-1.jpg, photo-2.jpg
    events/
      women-entrepreneur-award/photo-1.jpg
      teachers-award/photo-1.jpg
      pratibha-samman/photo-1.jpg

HOW TO SWAP OR ADD YOUR OWN PHOTOS
- To replace a photo: just drop your file into the matching folder with the
  SAME file name (e.g. overwrite assets/gallery/2024/photo-1.jpg).
- To add MORE photos to a year: add photo-2.jpg, photo-3.jpg, etc. into that
  year's folder, then open index.html, find the matching
  <div class="gallery-grid year-view" data-year="2024"> block, and copy/paste
  an extra line like:
    <div class="g-item"><img src="assets/gallery/2024/photo-2.jpg" alt="..."><div class="cap">...</div></div>
- To add a brand-new year: create a new folder under assets/gallery/, add a
  matching tab button in the "Gallery" section (<button class="tab-btn" ...>)
  and a matching <div class="gallery-grid year-view" data-year="...">.

WHATSAPP NUMBER
- Set once in js/main.js at the top (WA_NUMBER). Update it there if the
  contact number ever changes — it will update the floating button and both
  registration forms automatically.

REGISTRATION FORMS
- The "Miss Etah" (18–22) and "Miss Teen Etah Queen" (14–17) forms live in
  index.html inside the <section id="register"> block. Submitting either
  form opens WhatsApp with the entered details pre-filled as a message.
- Note: physical measurement fields (bust/waist/hip) from the original paper
  form were intentionally left out of the Teen (14–17) form, since that
  category is for minors. They can be added back to the adult Miss Etah form
  if you'd like — just ask.
