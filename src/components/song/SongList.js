import React, {useEffect} from 'react';
import { userPage } from '../../store/actions/actions';
import { connect } from 'react-redux';
import Song from './Song';

const SongList = (props) => {
    
  useEffect(() => {
      props.userPage();
  }, [props])

    return (
        <div>
           <h3>Welcome!</h3>
            {props.error ? (<p>Something happened, and it wasn't the right thing. {props.error}</p>) : null}
            <Song 
                spotifyId={props.spotifyID}
            />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        spotifyId: state.spotifyID || [],
        error: state.error,
    }
}

export default connect(mapStateToProps, {userPage}) (SongList);
