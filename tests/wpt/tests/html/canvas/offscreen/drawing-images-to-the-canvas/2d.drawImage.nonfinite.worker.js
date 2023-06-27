// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.nonfinite
// Description:drawImage() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  const response = await fetch('/images/redtransparent.png');
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);

  ctx.drawImage(bitmap, Infinity, 0);
  ctx.drawImage(bitmap, -Infinity, 0);
  ctx.drawImage(bitmap, NaN, 0);
  ctx.drawImage(bitmap, 0, Infinity);
  ctx.drawImage(bitmap, 0, -Infinity);
  ctx.drawImage(bitmap, 0, NaN);
  ctx.drawImage(bitmap, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, -Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, NaN, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, -Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, NaN, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, -Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, NaN, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, -Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, NaN);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, -Infinity, 0, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, NaN, 0, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, -Infinity, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, NaN, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, -Infinity, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, NaN, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, -Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, NaN, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, -Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, NaN, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, -Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, NaN, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, -Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, NaN, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, -Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, 100, NaN);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, Infinity, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, Infinity, 100, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, Infinity, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, Infinity, 0, 100, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, Infinity, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, Infinity, 100, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, Infinity, 50, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, Infinity, 0, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, 100, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, Infinity, 0, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, Infinity, 50);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, Infinity, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, Infinity, 100, Infinity);
  ctx.drawImage(bitmap, 0, 0, 100, 50, 0, 0, Infinity, Infinity);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
}, "drawImage() with Infinity/NaN is ignored");
done();