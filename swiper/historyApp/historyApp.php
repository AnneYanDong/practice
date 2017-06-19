<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>history功能结合PHP</title>
    <link rel="stylesheet" href="swiper.min.css">
    <meta name="viewport" content="width=device-width">
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-scrollbar"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-wrapper">
            <div class="swiper-slide" data-history="1">Slide 1</div>
            <div class="swiper-slide" data-history="2">Slide 2</div>
            <div class="swiper-slide" data-history="3">Slide 3</div>
            <div class="swiper-slide" data-history="4">Slide 4</div>
            <div class="swiper-slide" data-history="5">Slide 5</div>
            <div class="swiper-slide" data-history="6">Slide 6</div>
            <div class="swiper-slide" data-history="7">Slide 7</div>
            <div class="swiper-slide" data-history="8">Slide 8</div>
            <div class="swiper-slide" data-history="9">Slide 9</div>
            <div class="swiper-slide" data-history="10">Slide 10</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <style>
    body, html {
        padding: 0;
        margin: 0;
        position: relative;
        height: 100%;
    }
    .swiper-container {
        width: 100%;
        height: 300px;
        margin: 50px auto;
    }
    .swiper-slide {
        background: #f1f1f1;
        color:#000;
        text-align: center;
        line-height: 300px;
    }
    </style>
    <?php
	if(isset($_GET['page'])){
	$activeslide=str_replace('slide/','',$_GET['page'])-1;
	}else{
     $activeslide=0;
	}
	?>
    <script src="swiper.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 50,
			initialSlide:<?=$activeslide;?>,
            slidesPerView: 2,
            centeredSlides: true,
            slideToClickedSlide: true,
            grabCursor: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            scrollbar: '.swiper-scrollbar',
            pagination: '.swiper-pagination',
            history: 'historyApp.php?page=slide',
        });
    </script>
</body>
</html>
