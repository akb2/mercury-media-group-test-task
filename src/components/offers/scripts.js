import MainLogo from "../../images/logos/main.svg";





//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


  // Данные для заполнения карточек
  const items = [
    {
      type: "first",
      logo: MainLogo,
      title: "залепись цена",
      date: "с 17 февраля по 8 марта 2020 г."
    }
  ];


  const class_base = 'offers';
  const class_item = class_base + '__item';
  const class_logo = class_item + '-logo';
  const class_title = class_item + '-title';
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
            <div className="container">
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
        let draw_code;

        // Первый блок
        if ( this.item.type == "first" )
          { draw_code = this.draw_first (); }


        return (
          <div className={ class_item + ' ' + this.item.type } key={ this.key }>
            { draw_code }
          </div>
        );
      }



      // Отрисовать первый слайд
      draw_first () {
        return (
          <React.Fragment>
            <img className={ class_logo } src={ this.item.logo } />
            <div className={ class_title }>{ Parser ( this.item.title )}</div>
            <div className={ class_date }>{ Parser ( this.item.date )}</div>
          </React.Fragment>
        );
      }
    }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------