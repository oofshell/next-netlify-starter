import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html lang="en" class="wf-barlow-n5-active wf-barlow-n6-active wf-barlow-n8-active wf-barlow-i4-active wf-barlow-n4-active wf-barlow-n7-active wf-active" style="height: 100%;"><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>X-ware</title>
<script type="text/javascript">
    window.bubble_session_uid = '1645230903689x621256950927197400';
</script>
<script type="text/javascript">
    window.headers_source_maps = []
</script>
<script type="text/javascript">
window.load_error_log = [];
window.onerror = function load_error_function (msg, error_url, line, col) {
  return window.load_error_log.push({ msg: msg, error_url: error_url, line: line, col: col })
}
</script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['pre_early'] = Date.now();
</script>
<meta name="referrer" content="origin">
<script type="text/javascript" crossorigin="anonymous" charset="UTF-8" src="https://dhtiece9044ep.cloudfront.net/package/early_js/dd268d133928160ce0477aa496e40e77dc989e7bf0f4dba4f88bcf7132d53b15/xfalse"></script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['post_early'] = Date.now();
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow:500%7CBarlow:600%7CBarlow:700%7CBarlow:800%7CBarlow:italic%7CBarlow:regular"><script type="text/javascript">(function () {
    function onWebFontFinish () {
        window.google_web_fonts_active = true;
if (window.google_web_fonts_active_cb) {
    window.google_web_fonts_active_cb();
}
        (function fontface_loaded_snippet (font) {
  if (window.fontface_loaded == null) {
    window.fontface_loaded = {}
  }
  if (font != null) {
    window.fontface_loaded[font] = true
  } else {
    window.all_fontface_loaded = true
  }
  if (window.fontface_webfonts_loaded_cb) {
    return window.fontface_webfonts_loaded_cb(font)
  }
})()
    }
    var WebFontConfig = {'google': { families: ["Barlow:500","Barlow:600","Barlow:700","Barlow:800","Barlow:italic","Barlow:regular"] },
        active: function() {
            onWebFontFinish()
        },
        inactive: function() {
            console.log('Failed to load all the fonts');
            onWebFontFinish()
        },
        fontinactive: function(family_name, fvd) {
            console.log('fontinactive being called for ' + family_name + ', Google says the fonts didnt render');
            onWebFontFinish()
        }
    }
        window.WebFont.load(WebFontConfig);
})();</script>
<script>
(function initialize_data() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var data = JSON.parse(this.responseText);

        function init_data() {
            data.forEach(function(d) {
                Lib().db_instance().initialize_data(d.id, d.data, d.type, d.version);
            })
        }

        if (window.Lib) {
            init_data();
        } else {
            window.Lib_post_load = init_data;
        }
    }
};
xhr.open("GET", "https://x-ware.bubbleapps.io/version-test/api/1.1/init/data?location=" + encodeURIComponent(window.location.href), true);
xhr.send();
})();
</script>
<script type="text/javascript">window.gm_key = "AIzaSyDrc7Z2Xh0LNmHty4bO9Jine0mnKpx6p9Q";</script>
<script type="text/javascript">window.glrl_key_status = false;</script>
<link rel="icon" type="image/png" href="https://dd7tel2830j4w.cloudfront.net/f1530294839424x143528842134401200/Icon-no-clearspace.png">
<meta name="fragment" content="!">
<meta name="description" content="Bubble introduces a new way to build a web application. It’s a point-and-click programming tool. Bubble hosts all applications on its cloud platform.">
<meta name="twitter:card" content="summary_large_image">
<meta name="description" content="Bubble introduces a new way to build a web application. It’s a point-and-click programming tool. Bubble hosts all applications on its cloud platform.">
<meta name="twitter:card" content="summary_large_image">
<meta property="og:title" content="Bubble - Visual Programming">
<meta name="twitter:title" content="Bubble - Visual Programming">
<meta property="og:site_name" content="Bubble">
<meta name="twitter:site_name" content="Bubble">
<meta property="og:description" content="Build stuff without code and launch a startup without a tech-cofounder! Bubble is a visual programing language. Instead of typing code, use a visual editor to build applications. ">
<meta name="twitter:description" content="Build stuff without code and launch a startup without a tech-cofounder! Bubble is a visual programing language. Instead of typing code, use a visual editor to build applications. ">
<link rel="image_src" href="https://dd7tel2830j4w.cloudfront.net/f1578495816588x646815646347334700/Bubble%20Tags.png">
<meta property="og:image" content="https://dd7tel2830j4w.cloudfront.net/f1578495816588x646815646347334700/Bubble%20Tags.png">
<meta name="twitter:image:src" content="https://dd7tel2830j4w.cloudfront.net/f1578495816588x646815646347334700/Bubble%20Tags.png">
<meta property="og:url" content="https://x-ware.bubbleapps.io/version-test?debug_mode=true">
<meta property="og:type" content="website">
<meta property="fb:app_id" content="340887986039814">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<script type="text/javascript">
    window._p = '{"no_branding":false,"import_export_csv":false,"custom_domain":false,"ab_test_integration":false}';
</script>
<script type="text/javascript">
    window.bubble_page_name = "index";
</script>
<link type="text/css" href="https://dhtiece9044ep.cloudfront.net/package/run_css/6bae30d5dd72625be69fdf9a9358e32c9c853dd2e26811c894f4c013ff3243e9/xx-ware/test/index/xfalse/xtrue" rel="stylesheet">
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['pre_runjs'] = Date.now();
</script>
<script type="text/javascript" crossorigin="anonymous" charset="UTF-8" src="https://dhtiece9044ep.cloudfront.net/package/run_debug_js/e9ee27b90e3aec41eedde3ed33b2ca8ea2023b84f16d11430641b64e4e50a185/xfalse/x15"></script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['post_runjs'] = Date.now();
</script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['pre_staticjs'] = Date.now();
</script>
<script type="text/javascript" crossorigin="anonymous" charset="UTF-8" src="https://dhtiece9044ep.cloudfront.net/package/static_js/1943865070c0a6fb3fe770cf5166242e96ed58668dd3c8b030026310534c3347/xx-ware/test/index/xnull/xfalse/xtrue/xfalse"></script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['post_staticjs'] = Date.now();
</script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['pre_dynamicjs'] = Date.now();
</script>
<script type="text/javascript" crossorigin="anonymous" charset="UTF-8" src="https://dhtiece9044ep.cloudfront.net/package/dynamic_js/cf9af7606f6227534b44d41be8e48f80f5696bf7046965a952dbb930f8c57c8f/xx-ware/test/index/xnull/xfalse/xfalse/en_us/xfalse/xtrue"></script>
<script type="text/javascript">
if (!window._bubble_page_load_data) {
window._bubble_page_load_data = {}
}
window._bubble_page_load_data['post_dynamicjs'] = Date.now();
</script>
</head>
<body style="box-sizing: border-box; height: 100%;"><script type="text/javascript">
window.addEventListener('DOMContentLoaded', function (event) {
  if (window.appquery == null) {
    css = document.createElement('style');
css.type='text/css';
css.appendChild(document.createTextNode(".warning-message-failure {padding: 30px; line-height: 1.5; white-space: pre; z-index: 1000000; position: fixed; width: 100%; height: 100%; background: white;}"));
document.getElementsByTagName("head")[0].appendChild(css);
var newDiv = document.createElement("div");
newDiv.className = "warning-message-failure";
newDiv.innerHTML = "Your browser was unable to load some necessary resources, contact your IT network administrator and ask them to allow access to <br><br>     dhtiece9044ep.cloudfront.net <br>     dd7tel2830j4w.cloudfront.net/ <br>     d1muf25xaso8hp.cloudfront.net";
document.body.appendChild(newDiv);
    httpRequest = new XMLHttpRequest();
httpRequest.open('POST', '/user/m', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.send(JSON.stringify({measures: {page_load_error: 1, url: document.location.href, errors: window.load_error_log}}));
  };
});
</script><script type="text/javascript">window.addEventListener('DOMContentLoaded', function (event) {if (window.appquery && window.app == null) {css = document.createElement('style');
css.type='text/css';
css.appendChild(document.createTextNode(".warning-message-failure {padding: 30px; line-height: 1.5; white-space: pre; z-index: 1000000; position: fixed; width: 100%; height: 100%; background: white;}"));
document.getElementsByTagName("head")[0].appendChild(css);
var newDiv = document.createElement("div");
newDiv.className = "warning-message-failure";
newDiv.innerHTML = "Your browser was unable to load the application data. We've been notified of the issue. Please try again in a few moments and make sure not to use ad-blockers.";
document.body.appendChild(newDiv);}});</script>
<img style="display: none;" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">

<div class="highlight-box" style="display: none; width: 731px; height: 315px; left: 112.223px; top: 368px; padding: 0px; border: 1px solid rgb(107, 107, 107); border-radius: 0px;"></div><div class="greyout-when-debugging" style="display: none;"></div><div class="main-page bubble-element Page" style="width: 787px; height: 3446px; min-height: 100%; margin-right: auto; margin-left: auto; position: absolute; z-index: 1; top: 0px; overflow: hidden; background: none rgba(250, 250, 250, 0.9); box-sizing: border-box;"><div class="bubble-r-line" style="margin-top: 16px; height: 107px;"><div class="bubble-r-box" style="height: 107px; left: 31.4019px; width: 361px;"><h1 class="bubble-element Text clickable-element" tabindex="1" style="width: 186px; left: 0px; position: absolute; box-sizing: border-box; z-index: 2; height: 72px; top: 0px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; font-family: Barlow; font-size: 50px; font-weight: 800; color: rgb(9, 23, 71); line-height: 1.3; border-radius: 0px; cursor: pointer;"><div class="content">X-Ware</div></h1><h2 class="bubble-element Text" style="top: 66px; width: 361px; left: 0px; position: absolute; box-sizing: border-box; z-index: 3; height: 41px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; font-family: Barlow; font-size: 22px; font-weight: 500; color: rgb(9, 23, 71); line-height: 1.5; border-radius: 0px;"><div class="content">best javascript online-game hacking.</div></h2></div></div><div class="bubble-r-line" style="margin-top: 173px; height: 72px;"><div class="bubble-r-box" style="height: 72px; left: 8.15864px; width: 727px;"><h1 class="bubble-element Text" style="width: 727px; left: 0px; position: absolute; box-sizing: border-box; z-index: 4; height: 72px; top: 0px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; font-family: Barlow; font-size: 50px; font-weight: 800; color: rgb(9, 23, 71); line-height: 1.3; border-radius: 0px;"><div class="content">Want scripts?
</div></h1></div></div><div class="bubble-r-line" style="margin-top: 0px; height: 315px;"><div class="bubble-r-box" style="height: 315px; left: 7.70201px; width: 731px;"><div class="bubble-element Shape" style="width: 731px; left: 0px; position: absolute; box-sizing: border-box; z-index: 5; height: 315px; top: 0px; background-color: rgb(222, 222, 222); border-style: solid; border-width: 1px; border-color: rgb(107, 107, 107); border-radius: 0px;"></div><div class="bubble-element Text" style="width: 365px; left: 21px; position: absolute; box-sizing: border-box; z-index: 6; height: 64px; top: 11px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; font-family: Barlow; font-size: 16px; color: rgb(59, 59, 59); line-height: 1.4; border-radius: 0px;"><div class="content">Cookie Clicker 2 Script
https://retrobowlgame.com/cookie-clicker-2/</div></div><button class="bubble-element Button" style="top: 63px; width: 150px; left: 21px; position: absolute; box-sizing: border-box; z-index: 7; height: 45px; padding: 0px; cursor: inherit; background: none rgb(3, 180, 198); border: none; text-align: center; font-family: Barlow; font-size: 14px; font-weight: 700; color: rgb(255, 255, 255); letter-spacing: 2px; line-height: 1; border-radius: 5px; transition: background 200ms ease 0s;">Coming Soon!</button><button class="bubble-element Button" style="top: 189px; width: 150px; left: 21px; position: absolute; box-sizing: border-box; z-index: 8; height: 45px; padding: 0px; cursor: inherit; background: none rgb(3, 180, 198); border: none; text-align: center; font-family: Barlow; font-size: 14px; font-weight: 700; color: rgb(255, 255, 255); letter-spacing: 2px; line-height: 1; border-radius: 5px; transition: background 200ms ease 0s;">Get script</button><div class="bubble-element Text" style="top: 137px; width: 365px; left: 21px; position: absolute; box-sizing: border-box; z-index: 9; height: 64px; white-space: pre-wrap; overflow: visible; padding-bottom: 0px; font-family: Barlow; font-size: 16px; color: rgb(59, 59, 59); line-height: 1.4; border-radius: 0px;"><div class="content">Orteil Cookie Clicker Script
https://orteil.dashnet.org/cookieclicker/<br></div></div></div></div><div class="debugger-page-mention">The page is higher than your real design as the debugger is visible and displays a white area. 
 It will be back to normal when the debugger is off.</div></div><div class="greyout" style="display: none; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); position: fixed; z-index: 2002;"></div><div class="bubble-element CustomElement" style="height: 505px; top: 100px; position: fixed; left: 50%; z-index: 2002; display: none; box-sizing: border-box;"></div><div class="greyout" style="display: none; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); position: fixed; z-index: 2002;"></div><div class="bubble-element Popup" style="height: 272px; top: 100px; position: fixed; left: 50%; z-index: 2002; display: none; box-sizing: border-box;"></div><div class="page-is-loaded"></div></body></html>
  )
}
