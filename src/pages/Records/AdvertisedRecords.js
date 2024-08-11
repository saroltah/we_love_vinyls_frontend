import React from 'react';
import AllRecords from './AllRecords';

//Select records, that a user (not current user) uploaded.
function AdvertisedRecords(props) {
  const profile_id = props.profile_id || '';
  const filter_data = `advertiser=${profile_id}`;

  return (
    <div>
      <AllRecords
        message='No records to show...'
        filter={filter_data}
        showDropdown={false}
      />
    </div>
  );
}
export default AdvertisedRecords;
