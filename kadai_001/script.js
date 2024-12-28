//カルーセル
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true
});

//homeリンクのホバー時に不透明度を変更
$('.home').on('mouseover', function(){
    $(this).animate({
        opacity: 0.5
    }, 100);
});

$('.home').on('mouseout', function(){
    $(this).animate({
        opacity: 1.0
    }, 100);
});

//navリンクのホバー時に不透明度を変更
$('.nav-link').on('mouseover', function(){
    $(this).animate({
        opacity: 0.5
    }, 100);
});

$('.nav-link').on('mouseout', function(){
    $(this).animate({
        opacity: 1.0
    }, 100);
});

//スクロースした時にTOPボタンを表示
$(window).scroll(function(event){
    if($(this).scrollTop() > 100){
        $('#top-button').fadeIn();
    }else{
        $('#top-button').fadeOut();
    }
});

//リンククリック後ページ内遷移をなめらかにスクロール
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    let target = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop: target}, 600);
});

$('#top-button').on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});

//セクションの位置までスクロールした時にフェードインさせる
$(window).scroll(function(){
    $('.about, .works').each(function(){
        var windowTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if(scroll > windowTop - windowHeight + 200){
            $(this).addClass('scrolling');
        }
    });
});

//Worksの画像をクリックした時にモーダルで拡大表示
$('.works-inner img').on('click', function() {
    var src = $(this).attr('src');  // クリックした画像のsrcを取得
    $('#modal .modal-img').attr('src', src);  // モーダル内の画像srcを設定
    $('#modal').fadeIn();  // モーダルを表示
  });

  $('#modal span').on('click', function() {
    $('#modal').fadeOut();  // モーダルを非表示
  });