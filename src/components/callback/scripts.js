import './styles.scss';





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
                <div className="col-4">
                  <input className={ class_input } type="text" name="name" placeholder="Имя"/>
                </div>
                <div className="col-4">
                  <input className={ class_input } type="text" name="email" placeholder="E-mail"/>
                </div>
                <div className="col-3">
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