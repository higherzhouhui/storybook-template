
import PropTypes from 'prop-types';
import Card from './Card'
import './Card.scss'
export default function CardList({ props: { list, className } }) {
  return (
    <div className={`cardList-container ${className}`}>
      {
        list.map((item) => {
          return <Card key={item.href} props={item} />
        })
      }
    </div>
  );
}
CardList.propTypes = {
  /** Composition of the task */
  props: PropTypes.shape({
    /** list of the task */
    list: PropTypes.array.isRequired,
    className: PropTypes.string,
  }),
 };
