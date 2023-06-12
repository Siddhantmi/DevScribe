//First Page Content
class IntroductionToHTML extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="col-lg-8 col-md-12 offset-lg-2  centre-body" id="main">
                    <div class="content-div">
                        <h1 id="PageTitle1">Introduction to HTML</h1>
                        <p>HTML is the name of the file with the system and proper naming system</p>
                        <hr>
                    </div>


                    <div class="content-div">
                        <h2 id="PageTitle2">Watch Video tutorial</h2>
                        <div class="video">
                            <div class="video__youtube" data-youtube>
                                <img src="https://i.ytimg.com/vi/LIkRYKYGVn8/maxresdefault.jpg"
                                    class="video__placeholder" />
                                <button class="video__button"
                                    data-youtube-button="https://www.youtube.com/embed/LIkRYKYGVn8"></button>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div class="content-div">
                        <h2 id="PageTitle3">What is HTML?</h2>

                        <li>HTML stands for Hyper Text Markup Language</li>
                        <li>HTML is the standard markup language for creating Web pages</li>
                        <li>HTML consists of a series of elements</li>
                        <li>HTML elements tell the browser how to display the content</li>
                        <hr>
                    </div>


                    <div class="content-div">
                        <h2 id="3">A Simple HTML Document</h2>
                        <pre class="code-area-pre"><code class="language-html code-area-pre"><script type="prism-html-markup">
<h1 class="foo">h1. Heading 1</h1></script></code>

</pre>
                        <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                            editing
                            brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable
                            mixtape swag
                            wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag.
                            Tofu YOLO
                            Etsy, direct trade <strong>Odd Future jean </strong>ethical shorts paleo. Forage Shoreditch
                            tousled aesthetic
                            irony,
                            street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby
                            chic
                            lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella
                            DIY
                            90's blog.</p>
                    </div>

                    <div class="middle-text-code"></div>

                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them,
                        vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes
                        Anderson
                        semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings
                        +1
                        direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    <p>End of content...</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>

                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them,
                        vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes
                        Anderson
                        semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings
                        +1
                        direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    <p>End of content...</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>

                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them,
                        vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes
                        Anderson
                        semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings
                        +1
                        direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    <p>End of content...</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code
                        editing
                        brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape
                        swag
                        wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu
                        YOLO
                        Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic
                        irony,
                        street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic
                        lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
                        90's blog.</p>
                    <h2 id="5">Helo</h2>
                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them,
                        vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes
                        Anderson
                        semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings
                        +1
                        direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage
                        fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    <p>End of content...</p>





                </div>
      `;
    }
  }
  
  customElements.define('introduction-to-html-component', IntroductionToHTML);