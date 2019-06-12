<?php /* TEMPLATE NAME: Fico About Page */ ?>
<?php get_header(); ?>


<section id="home-page-content" class="template-container" role="main">

<?php include('utils/AboutFe.php') ?>
<style>
  .about-banner{
    display:flex;  
    padding:100px 50px;
  }

  .about-card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;  
    text-align:center;
    border:1px solid;
    flex:1;
    padding:100px 0px;
  }

  .about-card p{
    font-weight: lighter;
    line-height: 25px;
    font-size: 14px;
  }

  .about-card .img-container{
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .about-card h3{
    font-family: Stardos Stencil,cursive;
    color: #c54d27;
    top:50px;
    font-size:46px;
    left:-15px;

  }

  .about-card .circle{
    height: 150px;
    width: 150px;
    border-radius:50%;
    background-color:rgba(197, 77, 39,.3);
    position:absolute;
  }
</style>
<div class="about-banner">
  <div class="about-card">
    <div class="img-container">
      <div class="circle"></div>
      <h3>Germany</h3>
    </div>
    <div class="copy-container">
      <p>I completed my degree abroad in Hamburg, Germany.</p>
      <p>This was an experience that gave me the opportunity</p>
      <p>to learn the processes and outcomes of design on an international level.</p>
    </div>
  </div>

  <div class="about-card">
    <div class="img-container">IMAGE PHOTOGRAPHY</div>
    <div class="copy-container">
      <p>My degree was a double major in Graphic Design,</p>
      <p>Creative Advertising, Photography and Illustration.</p>
      <p>This has resulted in integrated work and a broader</p>
      <p>approach when it comes to planning and</p>
      <p>executing designs.</p>
    </div>
  </div>

  <div class="about-card">
    <div class="img-container">IMAGE WEBSITES</div>
    <div class="copy-container">
      <p>I have worked closely alongside web developers</p>
      <p>to create engaging and beautiful websites. I pride</p>
      <p>myself on considering both the visual side of</p>
      <p>web, but also creating a highly engaging and</p>
      <p>user friendly outcome.</p>
    </div>
  </div>
</div>

<?php include('utils/form.php') ?>

</section>

<?php get_footer(); ?>
