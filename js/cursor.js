/* Custom cursor — follows mouse, uses theme accent; pointer state on clickables */
(function () {
  if (!window.matchMedia('(hover: hover)').matches) return;

  var cursor = document.getElementById('cursor');
  if (!cursor) return;

  var dot = cursor.querySelector('.cursor-dot');
  var ring = cursor.querySelector('.cursor-ring');
  var x = 0, y = 0;
  var ringX = 0, ringY = 0;
  var started = false;

  function moveCursor(e) {
    x = e.clientX;
    y = e.clientY;
    if (!started) {
      ringX = x;
      ringY = y;
      started = true;
    }
    if (dot) {
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
    }
  }

  function lerpRing() {
    ringX += (x - ringX) * 0.2;
    ringY += (y - ringY) * 0.2;
    if (ring) {
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
    }
    requestAnimationFrame(lerpRing);
  }

  function setPointer(isPointer) {
    cursor.classList.toggle('pointer', isPointer);
  }

  function handleMouseOver(e) {
    var t = e.target;
    if (!t) return;
    var clickable = t.closest('a, button, [role="button"], .toggle-track');
    setPointer(!!clickable);
  }

  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', function (e) {
    if (!e.relatedTarget || !document.body.contains(e.relatedTarget)) setPointer(false);
  });
  lerpRing();
})();
