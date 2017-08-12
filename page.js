let running = false

window.onerror = function (messageOrEvent, source, lineno, colno, error) {
  console.error(messageOrEvent.toString())
};

(function ($) {
  'use strict'

  function addToLog() {
    const d = $("<p></p>")
    let t = [...arguments].join(" ")
    t = "[" + new Date() + "] " + t
    d.text(t)
    $("#logfield").append(d)
  }

  ["log", "error", "warn", "info"].forEach(d => {
    const o = console[d].bind(console)
    console[d] = function console() {
      addToLog.apply(window, arguments)
      o.apply(console, arguments)
    }
  })

  $("#node-state").click(() => {
    if (running) return
  })

  const node = new ZeroNet({})

  console.info("Ready to launch")

}(window.jQuery))
