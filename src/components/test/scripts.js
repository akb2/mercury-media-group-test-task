import './styles.scss';

import Radio from '../radio/scripts';
import HedgehogAva from '../../images/misc/hedgehog.png';





//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


  const class_base = 'test';

  const class_desc = class_base + '__desc';
  const class_desc_title = class_desc + '-title';
  const class_desc_desc = class_desc + '-desc';

  const class_form = class_base + '__form';
  const class_form_title = class_form + '-title';
  const class_form_answers = class_form + '-answers';
  const class_form_buttons = class_form + '-buttons';
  const class_form_button = class_form_buttons + '-button';
  const class_form_results = class_form + '-results';
  const class_form_results_text = class_form_results + '-text';
  const class_form_results_image = class_form_results + '-image';

  const class_answer = 'test-answer';
  const class_answer_item = class_answer + '__item';

  const class_radio = 'radio';
  const class_radio_input = class_radio + '__input';

  const id = 'some_id_for_test_form';
  let testQuestions;


//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------


  // Элемент списка
  export default class Test extends React.Component {
    render () {
      testQuestions = new TestQuestions;

      return (
        <section className="section">
          <div className="container container_large">
            <div className={ class_base }>
              <TestDesc />
              <div className={ class_form } id={ id }>
                <TestForm testQuestions={ testQuestions }/>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }


  // Блок-описания теста слева
  class TestDesc extends React.Component {
    render () {
      return (
        <div className={ class_desc }>
          <div className={ class_desc_title }>Пройди тест</div>
          <div className={ class_desc_desc }>
            Значимость этих проблем настолько очевидна,
            что постоянный количественный рост и сфера
            нашей активности позволяет оценить значение
            новых предложений.
          </div>
        </div>
      );
    }
  }


  // Блок отрисовки правой части
  class TestForm extends React.Component {

    // Клик по кнопке далее
    check_test ( event ) {
      const context = event.target;

      if ( $( context ).hasClass( class_form_button )) {
        if ( $( context ).parents( '.' + class_form ).length > 0 ) {
          const form = $( context ).parents( '.' + class_form )[0];
          const answers = $( form ).find( '.' + class_form_answers )[0];
          const current = $( answers ).find( '.' + class_radio_input + ':checked' )[0];


          // Следующий вопрос
          if ( $( current ).length > 0 ) {
            testQuestions.setAnswer( $( current ).val());
            testQuestions.setNext();
            this.forceUpdate ();
          }

          // Ошибка
          else
            { alert ( 'Выберите один из вариантов ответа!' ); }
        }
      }
    }

    // Рендер компонента
    render () {

      // Отрисовать вопрос
      if ( this.props.testQuestions.hasQuestions()) {
        return (
          <React.Fragment>
            <div className={ class_form_title }>{ this.props.testQuestions.getQuestion ()}</div>
            <div className={ class_form_answers + ' ' + class_answer }>
              {( this.props.testQuestions.getAnswers ()).map (( answer, key ) => (
                <div className={ class_answer_item } key={ key }>
                  <Radio name={ this.props.testQuestions.getKey ()} value={ key } text={ answer.text }/>
                </div>
              ))}
            </div>
            <div className={ class_form_buttons }>
              <span className={ class_form_button } onClick={ () => { this.check_test ( event )}}>
                { this.props.testQuestions.hasMoreQuestion ()? 'Далее': 'Результат' }
              </span>
            </div>
          </React.Fragment>
        );
      }

      // Отрисовать результат
      else {
        let result = this.props.testQuestions.getResult ();
        console.log( result );

        return (
          <React.Fragment>
            <div className={ class_form_title }>{ result.name }</div>
            <div className={ class_form_results }>
              <div className={ class_form_results_text }>{ result.answers }</div>
              <img className={ class_form_results_image } src={ HedgehogAva }/>
            </div>
          </React.Fragment>
        );
      }
    }
  }




  // Класс для работы с вопросами ответами  теста
  class TestQuestions {

    constructor () {
      const __questions = require( './questions' );
      const __answers = require( './answers' );

      this.hasResult = false;
      this.questions = __questions.default;
      this.answers = __answers.default;
      this.current = 0;
      this.user_answers = new Array ();
    }



    // Текущий вопрос
    currentQuestion () {
      const question = this.questions[ this.current ];

      if ( typeof question !== 'undefined' )
        { return question; }

      return new Object ();
    }

    // Есть еще вопросы
    hasQuestions () {
      return !this.hasResult;
    }



    // Текущий ключ
    getKey () {
      return this.current;
    }

    // Заголовок
    getQuestion () {
      const question = this.currentQuestion ();
      return question.question;
    }

    // Вопрос
    getQuestionByID ( number ) {
      number = parseInt ( number );
      number = isNaN ( number )? -1: number;

      const question = this.questions[ number ];

      return question;
    }

    // Список ответов
    getAnswers () {
      const question = this.currentQuestion ();
      return question.answers;
    }

    // Информация об ответе
    getAnswer ( number ) {
      const answer = this.answers[ number ];

      if ( typeof answer !== 'undefined' )
        { return answer; }

      return new Object ();
    }

    // Есть ли еще вопросы
    hasMoreQuestion () {
      return this.questions.length > this.current + 1? true: false;
    }

    // Результат теста
    getResult () {
      if ( !this.hasQuestions()) {
        let key = 0;
        let max = 0;
        for ( let _key in this.answers ) {
          let _value = this.answers[ _key ];
          if ( _value.count > max ) {
            max = _value.count;
            key = _key;
          }
        }

        return this.answers[ key ];
      }

      return null;
    }


    // Следующий вопрос
    setNext () {
      if ( this.current + 1 < this.questions.length )
        { this.current ++; }

      else {
        this.hasResult = true;
        for ( let key in this.answers )
          { this.answers[ key ].count = 0; }

        let key = 0;
        for ( let number of this.user_answers ) {
          let question = this.getQuestionByID ( key );
          let weight = question.answers[ number ].result;

          this.answers[ weight ].count ++;
          key ++;
        }
      }
    }

    // Установить значение
    setAnswer ( answer ) {
      this.user_answers[ this.current ] = answer;
    }
  }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------