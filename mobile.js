const mobileStyle = `
body{
	font-size: 14px;
}

.home-container 
.navigation-header 
.navigation-max-width
.navigation-nav 
.navigation-links-nav .navigation-links-root-class-name17
.button-secondary .button .button-md
.home-main
.home-portofolio .section-container
.home-max-width .max-content-container
.home-text-container
.home-text
.home-text01 .Heading2
.home-text02
.button .button-lg .button-secondary
.home-tab-selector-header
.home-text03 .tab-selector-btn
.home-tab-selector-cards-container
.portofolio-card-speaker-card .portofolio-card-root-class-name
.portofolio-card-see-project-container
.button-secondary-white
.portofolio-card-first-name
.portofolio-card-root-class-name5
.portofolio-card-root-class-name4
.portofolio-card-root-class-name3
.portofolio-card-root-class-name2
.portofolio-card-root-class-name1
.home-about .section-container
.home-max-width1 .max-content-container
.home-text-container
.home-text04
.home-text05
.home-text06
.home-checklist
.home-check-item
.fa-solid .fa-check
.home-text07
.home-check-item
.home-image-container
.home-image
.home-process .section-container
.home-max-width2
.home-text08
.home-text09
.home-step
.home-text10
.home-text11
.home-text12
.home-container1
.home-top-part
.home-links-container
.home-product-container
.home-text13
.home-text14
.home-navigate-container
.home-contact-container
.home-subscribe-container
.button-primary
.button-container{
	width: 100vw;
	padding: 10px;
}

.portofolio-card-image-container
.portofolio-card-image
img {
	max-width: 100vw;
	height: auto;
}
.Navigation-Link{
	font-size: inherit;
	letter-spacing: 0;
}
.navigation-max-width{
	margin-top: 20px;
}

`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyle;
document.head.appendChild(styleSheet);

let navbarImg = document.querySelector('.navigation-max-width img');
navbarImg.remove();