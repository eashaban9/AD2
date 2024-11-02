// Function to detect the device type
function getDeviceType() {
    const ua = navigator.userAgent;
    
    if (/tablet|ipad|playbook|silk|android(?!.*mobi)/i.test(ua)) {
      return 'tablet';
    } else if (/mobi|android|iphone|ipod/i.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }
  
  // Load specific JavaScript based on device type
  function loadScript(scriptSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.head.appendChild(script);
  }
  
  // Main logic
  const deviceType = getDeviceType();
  
  if (deviceType === 'mobile') {
    loadScript('mobile.js');
  } else if (deviceType === 'tablet') {
    loadScript('tablet.js');
  } else {
    loadScript('desktop.js');
  }
  