import './styles.scss';
import './styles-mobile.scss';





//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


  const class_base = 'callback';
  const class_title = class_base + '__title';
  const class_desc = class_base + '__desc';
  const class_input = class_base + '__input';
  const class_button = class_base + '__button';


//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------


  // Элемент списка
  export default class CallBack extends React.Component {
    render () {
      return (
        <section className="section">
          <div className="container">
            <div className={ class_base }>
              <div className={ class_title }>Подписаться на рассылку</div>
              <div className={ class_desc }>
                Значимость этих проблем настолько очевидна, что постоянный
                количественный рост и сфера нашей активности позволяет
                оценить значение новых предложений.
              </div>
              <div className="row inner-spacing">
                <div className="col-11 col-tablet-6 col-desktop-4">
                  <input className={ class_input } type="text" name="name" placeholder="Имя"/>
                </div>
                <div className="col-11 col-tablet-5 col-desktop-4 mt-3 mt-tablet-0">
                  <input className={ class_input } type="text" name="email" placeholder="E-mail"/>
                </div>
                <div className="col-11 col-tablet-5 col-desktop-3 mt-3 mt-desktop-0 offset-tablet-6 offset-desktop-0">
                  <span className={ class_button }>Подписаться</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------