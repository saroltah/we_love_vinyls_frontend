import { React, useState } from 'react';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Link, useHistory } from 'react-router-dom';
import ProfilePic from '../../elements/ProfilePic';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { axiosRes } from '../../api/AxiosDefaults';
import { PostDropdown } from '../../elements/PostDropdown';
import styles from '../../styles/OnePost.module.css';
import emoji from '../../styles/Emoji.module.css';
import Notification from '../../elements/Notification';

/*
  Display of a record
  Like logic and button
  Dislike logic and button
  Delete record logic
*/
const ShowRecord = (props) => {
  const {
    id,
    advertiser,
    artist,
    title,
    track_list,
    created,
    condition,
    image,
    released,
    genre,
    members_liking_count,
    comment_count,
    price,
    location,
    contact,
    advertiser_image,
    like_id,
    setRecords,
    advertiser_id,
    showLink = true,
  } = props;

  const currentUser = useCurrentUser();
  const is_advertiser = currentUser?.username === advertiser;
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMesssage] = useState('');
  const history = useHistory();

  const RecordTitle = (
    <div className={showLink ? styles.Title : styles.SecondTitle}>
      {artist}: {title}
    </div>
  );

  const editRecord = () => {
    history.push(`/records/${id}/edit`);
  };

  const deleteRecord = async () => {
    try {
      await axiosRes.delete(`/records/${id}/`);
      setTimeout(() => {
        history.push(`/records/`);
      }, 2000);
      setShowNotification(true);
      setNotificationMesssage('Record deleted successfully!');
    } catch (err) {
      setShowNotification(true);
      setNotificationMesssage('ERROR! Try again!');
      //console.log(err);
    }
  };

  const submitLike = async () => {
    try {
      const { data } = await axiosRes.post('/likes/', { liked_record: id });
      setRecords((prevRecords) => ({
        ...prevRecords,
        results: prevRecords.results.map((record) => {
          return record.id === id
            ? {
                ...record,
                members_liking_count: record.members_liking_count + 1,
                like_id: data.id,
              }
            : record;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  const submitUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setRecords((prevRecords) => ({
        ...prevRecords,
        results: prevRecords.results.map((record) => {
          return record.id === id
            ? {
                ...record,
                members_liking_count: record.members_liking_count - 1,
                like_id: null,
              }
            : record;
        }),
      }));
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <div>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className={styles.OnePost}>
        <div className={styles.Container}>
          <Link
            to={`/users/${advertiser_id}`}
            className={styles.LeftSide}
          >
            <ProfilePic
              src={advertiser_image}
              height={50}
            />
            {advertiser}
          </Link>
          <span className={styles.RightSide}>
            <span>{created}</span>

            <span>
              {is_advertiser && ShowRecord && (
                <PostDropdown
                  editPost={editRecord}
                  deletePost={deleteRecord}
                />
              )}
            </span>
          </span>
        </div>

        {showLink ? (
          <Link
            to={`/records/${id}`}
            className={styles.Link}
          >
            {RecordTitle}
          </Link>
        ) : (
          RecordTitle
        )}

        <Link to={`/records/${id}`}>
          <img
            src={image}
            alt={title}
            width={140}
          />
        </Link>
        <div className={styles.Details}>
          <p>
            <span className={styles.DetailsTitle}>Artist:</span> {artist}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Title:</span> {title}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Track list:</span>{' '}
            {track_list}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Year:</span> {released}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Genre:</span> {genre}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Condition:</span> {condition}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Location:</span> {location}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Price:</span> {price}
          </p>
          <p>
            <span className={styles.DetailsTitle}>Contact:</span> {contact}
          </p>

          <div>
            {is_advertiser ? (
              <OverlayTrigger
                placement='top'
                overlay={<Tooltip>You can not like your own posts!</Tooltip>}
              >
                <i className={`fa-solid fa-heart ${emoji.Emoji}`}></i>
              </OverlayTrigger>
            ) : like_id ? (
              <span
                onClick={submitUnlike}
                style={{ cursor: 'pointer' }}
              >
                <i className={`fa-solid fa-heart ${emoji.Emoji}`}></i>
              </span>
            ) : currentUser ? (
              <>
                <span
                  onClick={submitLike}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={`fa-regular fa-heart ${emoji.Emoji}`}></i>
                </span>
              </>
            ) : (
              <OverlayTrigger
                placement='top'
                overlay={<Tooltip>You have to log in to like posts!</Tooltip>}
              >
                <i className={`fa-regular fa-heart ${emoji.Emoji}`}></i>
              </OverlayTrigger>
            )}
            {members_liking_count}
            <Link
              to={`/records/${id}`}
              ms-3
            >
              <i className={`fa-regular fa-comment ${emoji.Emoji}`}></i>
            </Link>
            {comment_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecord;
