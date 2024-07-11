
import PropTypes from 'prop-types';
import './Button.scss'
export default function Button({ props: { id, size, variant, afterIcon, theme, style, className }, onClick, children }) {
  return (
    <div className={`${className} button-item button-variant-${variant || 'default'} button-variant-${theme || 'light'}-${variant || 'default'} button-size-${size || 'medium'} button-theme-${theme || 'light'}`} onClick={() => onClick(id)} style={style}>
      {children}
      {afterIcon ? afterIcon : ''}
    </div>
  );
}
Button.propTypes = {
  /** Composition of the task */
  props: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string || PropTypes.number,
    /** Title of the task */
    size: PropTypes.string,
    /** Current state of the task */
    variant: PropTypes.string,
    afterIcon: PropTypes.node,
    theme: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  }),
  children: PropTypes.node,
  /** Event to change the task to archived */
  onClick: PropTypes.func,
 };
