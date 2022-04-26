(function() {
    var txt = document.querySelector('textarea'),
        
        fn = function() {
          setTimeout(function() {
            txt.style.height = 'auto';
            txt.style.height = txt.scrollHeight + 'px';
          }, 0);
        };
    
    txt.addEventListener('keydown', fn, false);
  })();