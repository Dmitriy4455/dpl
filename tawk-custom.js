var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();

// Подключение Tawk.to
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6828bcf749a34190cd0e7c8/1irfi49gu";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// Условия и цены
const standardInfo =
  "\n\nFirst hour: £70 flat.\nThen £30 per additional 30 minutes.\n\nEstimated times vary — see below.\nFree assessment before any work.\n12-month guarantee. No hidden charges.\nWork only starts with your approval.";

// Когда загрузился чат
Tawk_API.onLoad = function () {
  showMainCategories();

  Tawk_API.onChatStarted = function () {
    Tawk_API.addEvent("message", function (msg) {
      var text = msg.text.trim().toLowerCase();
      if (text.includes("leaks")) showLeaks();
      else if (text.includes("plumbing")) showPlumbing();
      else if (text.includes("heating")) showHeating();
      else if (text.includes("pipe")) showPipeInstallation();
      else if (text.includes("back")) showMainCategories();
    });
  };
};

// Категории
function showMainCategories() {
  Tawk_API.setAttributes({
    suggestedMessages: [
      { text: "Leaks", reply: "Leaks" },
      { text: "Plumbing", reply: "Plumbing" },
      { text: "Heating", reply: "Heating" },
      { text: "Pipe Installation", reply: "Pipe Installation" },
    ],
  });
}

// Leaks
function showLeaks() {
  Tawk_API.setAttributes({
    suggestedMessages: [
      {
        text: "Can you fix a leaking tap?",
        reply:
          "We repair leaking taps and dripping fixtures.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "There's a leak under my sink",
        reply:
          "We fix leaks under sinks and cabinets.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "My toilet is leaking",
        reply:
          "We fix toilet leaks including fill valves and siphons.\nEstimated time: 45–90 minutes." +
          standardInfo,
      },
      { text: "Back to categories", reply: "Back" },
    ],
  });
}

// Plumbing
function showPlumbing() {
  Tawk_API.setAttributes({
    suggestedMessages: [
      {
        text: "My toilet isn't flushing",
        reply:
          "We repair flush mechanisms, buttons and valves.\nEstimated time: 45–90 minutes." +
          standardInfo,
      },
      {
        text: "Can you replace a tap?",
        reply:
          "Yes, we install and replace taps.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "Do you unblock sinks?",
        reply:
          "Yes, we unblock sinks and basins.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "Replace toilet cistern or pan",
        reply:
          "Yes, we replace cisterns or full toilet units.\nEstimated time: 90–120 minutes." +
          standardInfo,
      },
      { text: "Back to categories", reply: "Back" },
    ],
  });
}

// Heating
function showHeating() {
  Tawk_API.setAttributes({
    suggestedMessages: [
      {
        text: "Radiator not heating",
        reply:
          "We fix radiators that don't heat by bleeding or balancing.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "Can you move a radiator?",
        reply:
          "Yes, we move and reinstall radiators.\nEstimated time: 90–120 minutes." +
          standardInfo,
      },
      {
        text: "Noisy radiator",
        reply:
          "We resolve radiator noise caused by air or sludge.\nEstimated time: 30–60 minutes." +
          standardInfo,
      },
      {
        text: "Install TRV valve",
        reply:
          "We install thermostatic radiator valves (TRVs).\nEstimated time: 60–90 minutes." +
          standardInfo,
      },
      { text: "Back to categories", reply: "Back" },
    ],
  });
}

// Pipe Installation
function showPipeInstallation() {
  Tawk_API.setAttributes({
    suggestedMessages: [
      {
        text: "Do you install new pipes?",
        reply:
          "Yes, we install new pipework for homes and extensions.\nTime depends on access and layout." +
          standardInfo,
      },
      {
        text: "Can you reroute plumbing?",
        reply:
          "Yes, we reroute existing plumbing for renovations.\nDepends on structure and access." +
          standardInfo,
      },
      {
        text: "Do you install bathroom pipes?",
        reply:
          "We install and connect bathroom pipework.\nEstimated time: 180–300 minutes for full installs." +
          standardInfo,
      },
      { text: "Back to categories", reply: "Back" },
    ],
  });
}
