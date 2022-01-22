$(document).mouseup(function (e){ 
        var div = $(".main-nav"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            if ($('.main-nav').attr('data-status') == 1) {
            $('.main-nav').animate({
                left: "-600"
            }, 500, function() {
                $('.main-nav').attr('data-status', 0)
            });
        }
        }

        var modal = $(".modal-inner");
        $modal_parent = $(modal).parent('.modal'); 
        if (!($modal_parent.hasClass('modal--hidden'))) {
        console.log(modal.hasClass('modal--hidden'));
            if (!modal.is(e.target) // если клик был не по нашему блоку
                && modal.has(e.target).length === 0) { // и не по его дочерним элементам
                    $modal_parent.animate({
                    opacity: "0"
                }, 500, function() {
                    $modal_parent.toggleClass('modal--hidden');
                });
            }
        }
    });

var i = 0;
var txt = 'avalon'; /* Текст */
var speed = 50; /* Скорость/длительность эффекта в миллисекундах */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("username-js").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


$(document).ready(function () {
    //typeWriter();
    $('form').submit(function(e) {
        var $form = $(this);
        $modal = $(this).parent('.modal-inner').parent('.modal');
        $goal = $(this).attr('data-goal');
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
            ym(50036905, 'reachGoal', $goal);
          alert('Сообщение было успешно отправлено');
          $modal.animate({
                    opacity: "0"
                }, 500, function() {
                    $modal.toggleClass('modal--hidden');
                });
        }).fail(function() {
            alert('Произошла ошибка\nПопробуйте позже');
            $modal.animate({
                    opacity: "0"
                }, 500, function() {
                    $modal.toggleClass('modal--hidden');
                });
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });

    $('.menu-btn').click(function() {
        if ($('.main-nav').attr('data-status') == 0) {
            $('.main-nav').animate({
                left: "0"
            }, 500, function() {
                $('.main-nav').attr('data-status', 1);
            });
        }
    });

    $('.modal-js').click(function(e) {
        e.preventDefault();
        $modal_id = $(this).attr('href');
        if ($($modal_id)) {
            console.log('FOUND');
            console.log($($modal_id));
            $modal = $($modal_id);
            if ($modal.hasClass('modal--hidden')) {
                $modal.toggleClass('modal--hidden');
            $modal.animate({
                opacity: "1"
            }, 500, function() {
                console.log('text');
            });
            }
            else {
                console.log('БРЕВНО');
            }
            
        }
        
    });


	// Particles
	particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 109,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0.1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
	    "retina_detect": true
	});
	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
	    stats.begin();
	    stats.end();
	    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
	        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	    }
	    requestAnimationFrame(update);
	};
	requestAnimationFrame(update);
	// particles end
});