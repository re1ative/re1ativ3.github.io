let portfolio_items = [
    {
        small_image: '../img/portfolio/miner_vsmall.jpg',
        img: [
            {
                big: '../img/portfolio/miner1_big.png',
                small: '../img/portfolio/miner1_small.png'
            },
            {
                big: '../img/portfolio/miner2_big.png',
                small: '../img/portfolio/miner2_small.png'
            },
            {
                big: '../img/portfolio/miner3_big.png',
                small: '../img/portfolio/miner3_small.png'
            }
        ],
        active: false,
        title: 'Main Miner',
        link: 'miner/',
        subtitle: 'Сайт по продаже оборудования для майнинга',
        description: '<h3>Использованы следующие<br>технологии</h3><ol><li>HTML</li><li>CSS</li><li>JS</li></ol><p>Реализованы фильтр товаров по алгоритмам, слайдеры, и параллакс. Плавный скролл по клику на ссылки и модальные окна для заказа в 1 клик.</p>'
    },
    {
        small_image: '../img/portfolio/drp_vsmall.jpg',
        img: [
            {
                big: '../img/portfolio/drp_big.jpg',
                small: '../img/portfolio/drp_small.png'
            }
        ],
        active: false,
        title: 'Deep RolePlay',
        link: 'deep-rp/',
        subtitle: 'Сайт для RP проекта в SAMP. Выложен бесплатно на Pawno-Info',
        description: '<h3>Использованы следующие<br>технологии</h3><ol><li>HTML</li><li>CSS</li><li>JS</li></ol><p></p>'
    },
    


];



let app = new Vue({
    el: '#app',
    data: {
     current_item: portfolio_items[0],
     items:  portfolio_items
    },
    created: function () {
        
        current_item = this.items[0],
        current_item.active = true;
        
        $('.portfolio-list__item:nth-child(0)').addClass('portfolio-list__item--active');
      },
    methods: {
      selectItem(item_index) {
        this.current_item.active = false;

        this.current_item = this.items[item_index];
        this.current_item.active = true;
      },
    }
  });