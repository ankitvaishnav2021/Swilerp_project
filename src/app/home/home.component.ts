import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title =
    'SWIL Software: Billing, Inventory, POS Software Solution for SMEs';
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, private titleservice: Title, private megaTagService: Meta, private router: Router) { }


  onclickFeatureshow(id: string) {
    $('.features-box').addClass('features-box-overlay');
    $(id + ' .features-box-flip').show();

  }

  onclickFeaturehide(id: string) {

    $(id + ' .features-box-flip').hide();
    $('.features-box').removeClass('features-box-overlay');

  }

  ngOnInit(): void {


    this.titleservice.setTitle(this.title);




    /* Local Business Snippet*/
    let scriptA = this.renderer2.createElement('script');
    scriptA.type = `application/ld+json`;
    scriptA.text = `
     {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21, Sunder Market, Near SMS Hospital, S.R.S. Road,",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302 004"
        
      },
      
      "name": "Softworld (India) Pvt. Ltd.",
      "telephone": "9529913873",
      "email": "info@swindia.com",
      "url": "https://www.swindia.com/",
      "image": "https://www.swindia.com/images/logo-small.png",  
      "priceRange": "₹₹"      
    }
     `;
    this.renderer2.appendChild(this._document.head, scriptA);
    /* Local Business Snippet*/

    /* Organization Snippet*/
    let scriptB = this.renderer2.createElement('script');
    scriptB.type = `application/ld+json`;
    scriptB.text = `
{
  "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": "Softworld India Pvt. Ltd. (Swil)",
  "url": "https://www.swindia.com/",
  "sameAs": [
     "https://www.facebook.com/Softworld-India-Pvt-Ltd-510057982375966/",
     "http://www.linkedin.com/company/softworld-india-pvt-ltd",
     "https://twitter.com/swindia",
     "https://www.youtube.com/user/SoftworldJpr?sub_confirmation=1"
  ],
  "logo": "https://www.swindia.com/images/logo-small.png",
  "image": "https://www.swindia.com/images/resource/retailgraph-software-swil.jpg",
  "description": "Get inclusive Accounting & GST billing software, Inventory management software, POS software, best in India for Small business, multi-stores & wholesaler.",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "21 Sunder Market, Sawai Ram Singh Rd",
     "postOfficeBoxNumber": "Near SMS Hospital",
     "addressLocality": "Jaipur",
     "addressRegion": "Rajasthan",
     "postalCode": "Jaipur",
     "addressCountry": "India"
  }
  }
`;
    this.renderer2.appendChild(this._document.head, scriptB);
    /* Organization Snippet*/




    let Languagetag = this.renderer2.createElement('link');
    Languagetag.rel = "alternate";
    Languagetag.hreflang = "en-us";
    Languagetag.href = 'https://www.swindia.com' + this.router.url
    this.renderer2.appendChild(this._document.head, Languagetag);



    /*metatags update*/
    this.megaTagService.updateTag({
      name: 'robots', content: 'index, follow',
    });
    this.megaTagService.updateTag({
      name: 'description',
      content:
        'SWIL offer cost-effective software solutions in India for Retail Business, Multi Stores & Wholesalers. ✔ Billing Software ✔ Inventory Software ✔ POS Solutions.',
    });
    this.megaTagService.updateTag({
      name: 'keywords',
      content:
        'retail software, retail management software, billing software, inventory management, accounting software, POS, invoice software, order management software, sales management, software for wholesaler, software for multi-store, supermarket',
    });
    this.megaTagService.updateTag({
      name: 'og:title',
      content:
        'SWIL Software: Billing, Inventory, POS Software Solution for SMEs',
    });
    this.megaTagService.updateTag({
      name: 'og:description',
      content:
        'SWIL offer cost-effective software solutions in India for Retail Business, Multi Stores & Wholesalers. ✔ Billing Software ✔ Inventory Software ✔ POS Solutions.',
    });
    this.megaTagService.updateTag({
      name: 'og:url',
      content: 'https://www.swindia.com/',
    });
    this.megaTagService.updateTag({

      name: 'twitter:title',
      content:
        'SWIL Software: Billing, Inventory, POS Software Solution for SMEs',
    });
    this.megaTagService.updateTag({
      name: 'twitter:description',
      content:
        'SWIL offer cost-effective software solutions in India for Retail Business, Multi Stores & Wholesalers. ✔ Billing Software ✔ Inventory Software ✔ POS Solutions.',
    });
    this.megaTagService.updateTag({
      name: 'twitter:url',
      content: 'https://www.swindia.com/',
    });




    $.getScript('./assets/js/root.js');
  }

}
