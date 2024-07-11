
import PropTypes from 'prop-types';
import './Card.scss'
export default function Card({ props: { title, href, icon, content } }) {
  return (
    <a className={`card-item`} href={href}>
      <p className='title'>
        <img alt='placeholder' src={icon} />
        <span>{title}</span>
      </p>
      <p className='content'>{content}</p>
    </a>
  );
}
Card.propTypes = {
  /** Composition of the task */
  props: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string,
    /** Title of the task */
    href: PropTypes.string.isRequired,
    /** Current state of the task */
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
  }),
 };
