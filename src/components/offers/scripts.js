import './styles.scss';

import MainLogo from "../../images/logos/main.png";
import GiftCardIcon from "../../images/icons/gift-card.png";
import ProductsIcon from "../../images/icons/products.png";
import FlyerImage from "../../images/misc/flyer.png";
import BoxChair from "../../images/misc/box-chair.png";
import BoxCheck from "../../images/misc/box-check.png";





//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


  // Данные для заполнения карточек
  const items = [{
    type: "first",
    color: "transparent",
    logo: MainLogo,
    title: "залепись",
    subtitle: "цена",
    date: "с 17 февраля по 8 марта 2020 г."
  }, {
    color: "pink",
    icon: GiftCardIcon,
    title: "Получите<br>на кассе купон<br>со скидками",
    title_stars: 2,
    desc: "При покупке от 700 руб.",
    desc_stars: 1
  }, {
    type: "image",
    color: "green",
    image: FlyerImage
  }, {
    color: "purple",
    icon: ProductsIcon,
    title: "Выберите товар<br>и наклейте<br>скидку",
    title_stars: 3
  }, {
    color: "orange",
    type: "offer_left",
    title: "Наклейка перекрывает штрих-код на упаковке",
    image: BoxChair
  }, {
    color: "orange",
    type: "offer_right",
    title: "Наклейка не перекрывает штрих-код на упаковке",
    image: BoxCheck
  }];


  const class_base = 'offers';
  const class_item = class_base + '__item';
  const class_container = class_item + '-container';
  const class_offer_container = class_item + '-offer-container';
  const class_icon = class_item + '-icon';
  const class_logo = class_item + '-logo';
  const class_image = class_item + '-image';
  const class_title = class_item + '-title';
  const class_subtitle = class_item + '-subtitle';
  const class_desc = class_item + '-desc';
  const class_date = class_item + '-date';


//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------


    // Элемент списка
    export default class Offers extends React.Component {
      render () {
        let jsx = items.map ( function ( value, key ) {
          let item = new DrawOffers( key, value );
          return item.draw();
        });


        return (
          <section className="section">
            <div className="container container_without">
              <div className={ class_base }>
                { jsx }
              </div>
            </div>
          </section>
        );
      }
    }


    // Отрисовка элемента
    class DrawOffers {

      // Конструктор
      constructor ( key, item ) {
        this.key = key;
        this.item = item;
      }

      // Опредение нужной ункции отрисовки
      draw () {
        const functions = {
          offer_left: 'draw_offer',
          offer_right: 'draw_offer',
          first: 'draw_first',
          image: 'draw_image',
          default: 'draw_default'
        };

        this.item.type = typeof this.item.type === 'string'? this.item.type: '';
        this.item.type = this.item.type.length > 0? this.item.type: 'default';
        this.item.type = functions.hasOwnProperty( this.item.type )? this.item.type: 'default';

        let draw_code = this[ functions[ this.item.type ]] ();


        return (
          <div
            className={ class_item + ' ' + ( this.item.type != 'default'? this.item.type: '' ) + ' ' + this.item.color }
            key={ this.key }
          >
            <div className={ class_container }>
              { draw_code }
            </div>
          </div>
        );
      }



      // Отрисовать первый слайд
      draw_first () {
        return (
          <React.Fragment>
            <img className={ class_logo } src={ this.item.logo } />
            <div className={ class_title }>{ Parser ( this.item.title )}</div>
            <div className={ class_subtitle }>{ Parser ( this.item.subtitle )}</div>
            <div className={ class_date }>{ Parser ( this.item.date )}</div>
          </React.Fragment>
        );
      }

      // Отрисовать картинку
      draw_image () {
        return (
          <React.Fragment>
            <img className={ class_image } src={ this.item.image } />
          </React.Fragment>
        );
      }

      // Отрисовка стандартного блока
      draw_default () {
        const stars = function ( stars ) {
          if ( stars > 0 )
            { return <span className="sup">{ "*".repeat( stars )}</span>; }
        };

        let desc;
        if ( this.item.desc ) {
          desc = (
            <div className={ class_desc }>
              { Parser ( this.item.desc )}
              { stars ( this.item.desc_stars )}
            </div>
          );
        }

        return (
          <React.Fragment>
            <div className={ class_icon } style={{ backgroundImage: 'url(' + this.item.icon + ')' }} />
            <div className={ class_title }>
              { Parser ( this.item.title )}
              { stars ( this.item.title_stars )}
            </div>
            { desc }
          </React.Fragment>
        );
      }

      // Отрисовать предложение
      draw_offer () {
        return (
          <div className={ class_offer_container }>
            <img className={ class_image } src={ this.item.image } />
            <div className={ class_title }>{ this.item.title }</div>
          </div>
        );
      }
    }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------