import PropTypes from 'prop-types';
import { ColorRing } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{ margin: 'auto' }}
          wrapperClass="blocks-wrapper"
          colors={['#f47e60', '#f47e60', '#f8b26a', '#f8b26a', '#f47e60']}
        />
      )}
    </>
  );
};
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
