import './styles.scss';
import './styles-tablet.scss';
import './styles-mobile.scss';





//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------


  const class_base = 'radio';
  const class_input = class_base + '__input';
  const class_helper = class_base + '__helper';
  const class_text = class_base + '__text';


//------------------------------------------------------------------------------------------------------------
// Данные
//------------------------------------------------------------------------------------------------------------





//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------


  // Отрисовка инпута
  export default class Radio extends React.Component {

    toggleState ( event ) {
      $( event.target ).prop( 'checked', true );
    }

    // Случайная строка
    randomString ( size ) {
      const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
      let str = '';

      size = parseInt( size );
      size = isNaN( size )? 0: size;
      size = size > 0? size: 1;

      for ( let i = 0; i < size; i++ ) {
        let pos = Math.floor ( Math.random() * chrs.length );
        str += chrs.substring( pos, pos + 1 );
      }

      return str;
    }

    // Рендер поля
    render () {
      const id = 'radio_id_' + this.props.name + '_' + this.props.value + '_' + this.randomString ( 64 );

      return (
        <div className={ class_base }>
          <input
            className={ class_input }
            type="radio"
            name={ this.props.name }
            value={ this.props.value }
            id={ id }
            onChange={ this.toggleState }
            checked={ true }
          />
          <label className={ class_helper } htmlFor={ id }/>
          <label className={ class_text } htmlFor={ id }>{ this.props.text }</label>
        </div>
      );
    }
  }


//------------------------------------------------------------------------------------------------------------
// Классы
//------------------------------------------------------------------------------------------------------------