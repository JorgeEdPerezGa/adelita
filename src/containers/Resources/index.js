import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import VideoSearch from '../VideoSearch';
import VideoList from '../../components/VideoList';
import VideoMain from '../../components/VideoMain';
import YouTubeAPI from '../../API/api.js';
import { addVideos, selectedVideo } from '../../actions';
import './style.css';

class Resources extends Component {

  async componentDidMount(){
    await this.videoSearch('our story of rape and reconciliation');
  }

  videoSearch = (term) => {
    YTSearch({
      key: 'AIzaSyBTUm5SLmxj-bDDNacsf-4A96i956fS7d4',
      term: term},
    videos => {
      return (
        this.props.addVideos(videos),
        this.props.selectedVideo(videos[0])
      );
    });
  }

  handleVideoChange = async (clickedVideo) => {
    await this.props.selectedVideo(clickedVideo)
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term) ;
    }, 300);

    return (
      <div className = 'resources'>
        <form className = 'video-form'>
          <VideoSearch videoSearch = {videoSearch}/>
        </form>
        <section className = 'video-body'>
          <VideoMain
            video = {this.props.currentVideo}/>
          <VideoList
            videos = {this.props.videos}
            handleVideoChange = {this.handleVideoChange}/>
          <p className="video-text">2 hours ago</p>
        </section>
        <div className="line"></div>
        <section className= 'video-body video-body-1'>
          <section className = 'video-body video-body-2'>
            <h2>What is a rape kit?</h2>
            <p>You may have heard the term “rape kit” to refer to a sexual assault forensic exam. The term rape kit actually refers to the kit itself—a container that includes a checklist, materials, and instructions, along with envelopes and containers to package any specimens collected during the exam. A rape kit may also be referred to as a Sexual Assault Evidence Kit (SAEK). The contents of the kit vary by state and jurisdiction and may include:</p>

            <ul>
              <li>Bags and paper sheets for evidence collection</li>
              <li>Comb</li>
              <li>Documentation forms</li>
              <li>Envelopes</li>
              <li>Instructions</li>
              <li>Swabs</li>
            </ul>

            <p>DNA evidence from a crime like sexual assault can be collected from the crime scene, but it can also be collected from your body, clothes, and other personal belongings. You may choose to have a sexual assault forensic exam, sometimes known as a “rape kit,” to preserve possible DNA evidence and receive important medical care. You don’t have to report the crime to have an exam, but the process gives you the chance to safely store evidence should you decide to report at a later time.</p>
          </section>
          <img src={'https://s1.r29static.com//bin/entry/e80/x,80/1385255/image.jpg'}/>
          <p className="video-text video-text-1">1 week ago</p>
        </section>
      </div>
    );
  }
}
export const mapStateToProps = (store) => {
  return {
    videos: store.videos,
    currentVideo: store.currentVideo
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    addVideos: (videos) => dispatch(addVideos(videos)),
    selectedVideo: (video) => dispatch(selectedVideo(video))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
