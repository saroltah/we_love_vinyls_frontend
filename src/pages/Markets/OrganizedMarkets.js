import React from 'react';
import AllMarkets from './AllMarkets';

//Select markets, that a user (not current user) uploaded.
function OrganizedMarkets(props) {
  const profile_id = props.profile_id || '';
  const filter_data = `organizer=${profile_id}`;

  return (
    <div>
      <AllMarkets
        message='No markets to show...'
        filter={filter_data}
        showDropdown={false}
      />
    </div>
  );
}
export default OrganizedMarkets;
