function load_js_file(scriptUrl) {
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.head.appendChild(script);
}
load_js_file('load_the_files.js');

