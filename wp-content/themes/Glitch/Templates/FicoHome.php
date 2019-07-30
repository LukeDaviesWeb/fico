<?php /* TEMPLATE NAME: Fico Home Page */ ?>
<?php get_header(); ?>


<section id="home-page-content" class="template-container" role="main">

<div class="home-header">  
    <div class="navigation">
        <div class="back">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="forward">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
    <div class="left">
        <div class="image"></div>
        <div class="column"></div>
    </div>
    <div class="right">
        <div class="container">
            <div class="type">Brand Identity</div>
            <div class="title">
                <h2>Sakura Sushi</h2>
            </div>
            <div class="action">
                <div class="btn">See More</div>
            </div>
        </div>
    </div>
</div>

<div class="home-copy-section">
    <div class="top">
        <div class="title-container">
            <h1>Ordinary Redesigned.</h1>
        </div>
    </div>
    <div class="bottom">
        <div class="copy-container">
            <p>Who wants to be ordinary anyway? We believe that it is essential that our designs are driven by innovation, originality and autheticity. We will always take the time to get to know you and your brand down to the smallest detail, as there is nothing more important than crafting brands that represent companies and people genuinely.</p>

            <p>Whether you are wanting to create an identity from the ground up or looking to refresh an existing brand, we are ready for you!</p>
        </div>
    </div>
</div>

<?php include('utils/form.php') ?>

</section>


<script>
    //vars
    const slides = [
        {
            image: '/wp-content/uploads/2019/05/09.-2.SAKURA.png',
            type: 'Brand Identity',
            title: 'Sakura Sushi', 
            link:'/'
        },
        {
            image: '/wp-content/uploads/2019/05/09.-3.SAKURA.png',
            type: 'Brand Identity',
            title: ' Sushi', 
            link:'/'
        },
        {
            image: '/wp-content/uploads/2019/05/04.-SHOOTERS.png',
            type: 'Brand Identity',
            title: 'No Sushu', 
            link:'/'
        }
    ];

    const imageElem     = document.querySelector('.home-header .image')
    const typeElem      = document.querySelector('.home-header .type')
    const titleElem     = document.querySelector('.home-header .title h2')
    // const linkElem      = document.querySelector('.home-header .image')
    const forwards      = document.querySelector('.navigation .forward')
    const backwards     = document.querySelector('.navigation .back')
    const totalImages   = slides.length;

    let count           = 0;



    //stp 1 - load first image from array
    loadImage();

    //stp 2 - click forwards to see next image
    forwards.addEventListener('click', nextImage)

    //stp 3 - click backwards to see the previous image
    backwards.addEventListener('click', previousImage)

    // stp 4 create dots, one for each image triggered on load and image change

    //stp 1
    function loadImage(){
        slides.map((slide, i) => {
            if(count === i){
                imageElem.style.backgroundImage = `url(${slide.image})`
                typeElem.innerHTML = slide.type
                titleElem.innerHTML = slide.title
            }
        })
    }
    //stp 2
    function nextImage(){
        count ++
        count > (totalImages - 1 ) ? count = 0 : '' 
        loadImage();
    }
    //stp 3
    function previousImage(){
        count -- 
        count < 0 ? count = (totalImages - 1 ) : ''
        loadImage();
    }



</script>

<?php get_footer(); ?>
