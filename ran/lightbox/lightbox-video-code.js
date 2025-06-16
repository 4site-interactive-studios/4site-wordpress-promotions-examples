// RAN (Margot) wrote their own custom code to show this pop-up as a "RAW Code" promotion: https://www.ran.org/wp-admin/post.php?post=20158&action=edit


Script (You'll also need to load in or replace jQuery)
<script>
  jQuery( document ).ready(function() { 

    if (jQuery(window).width() > 1000) { 
        lightbox_open();
    };
    jQuery('#boxclose').click(function(){
        lightbox_close();
    })
 });

function lightbox_open() {
  var lightBoxVideo = document.getElementById("lb-video-margot");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  document.getElementById('wrd-button').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("lb-video-margot");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  document.getElementById('wrd-button').style.display = 'none';
  lightBoxVideo.pause();
}
</script>
HTML
<div id="light">
  <a class="boxclose" id="boxclose"></a>
  <a href="https://act.ran.org/page/68358/donate/1?ea.tracking.id=w_lb&en_og_source=w_lb">
  <video id="lb-video-margot" width="100%" autoplay="autoplay" muted="muted">
      <source src="https://www.ran.org/wp-content/uploads/2024/05/wrd-video-lb-2024-sized.mp4" type="video/mp4">
      <!--Browser does not support <video> tag -->
    </video>
</a>
</div>
<a href="https://act.ran.org/page/68358/donate/1?ea.tracking.id=w_lb&en_og_source=w_lb"><div id="wrd-button">Give Today</div></a>
<div id="fade"></div>
Custom CSS
#fade {
  display: none;
  position: fixed;
  overflow: hidden;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.8;
  opacity: .80;
  filter: alpha(opacity=80);
}

#light {
  display: none;
  position: absolute;
  top: 450px;
  left: 50%;
  max-width: 900px;
  max-height: 500px;
  margin-left: -450px;
  margin-top: -250px;
  background: #000000;
  z-index: 1002;
  overflow: visible;
}

#boxclose {
    float: right;
    cursor: pointer;
    color: #fff;
    border: 1px solid #AEAEAE;
    border-radius: 20px;
    background: #222222;
    font-size: 31px;
    font-weight: bold;
    display: inline-block;
    line-height: 0px;
    padding: 17px 6px 16px 7px;
    position: absolute;
    right: -20px;
    top: -20px;
    z-index: 1002;
    opacity: 0.9;
}

.boxclose:before {
  content: "×";
}

#fade:hover ~ #boxclose {
  display:none;
}

.test:hover ~ .test2 {
  display: none;
}

#wrd-button {
    background-color: #f1700b;
    border-color: #f1700b;
    text-transform: uppercase;
    border-radius: 0;
    display: none;
    height: 58px;
    width: 281px;
    padding-top: 10px;
    text-align: center;
    position: absolute;
    top: 450px;
    left: 50%;
    margin-left: -450px;
    margin-top: 272px;
    z-index: 1002;
}

a #wrd-button {
    color: #000000;
    font-family: "HarmoniaSansPro-Black";
    font-size: 30px;
}

#wrd-button:hover {
    filter: drop-shadow(5px 5px 10px #000000);
    margin-top: 270px;
}
