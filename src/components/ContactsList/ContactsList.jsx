import PropTypes from 'prop-types';

import css from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactsList;
