/*
	global Microsoft
*/

import React from 'react';
import { LoadScript } from './../utils/Core';

class Map extends React.Component {
	constructor(props) {
		super(props);
    this.myMapElRef = React.createRef()
    this.myMapWrapperRef = React.createRef()
    this.Map = null
    this.rqf = null
    this.location = props.location;
	}

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  componentDidMount() {
    if(typeof Microsoft === 'object' && typeof Microsoft.Maps === 'object') {
     this.renderMap()
     return
    }
    const ready = new Promise(resolve => window['bingMapsLoaded'] = resolve);
    LoadScript('https://www.bing.com/api/maps/mapcontrol?key=AsZQ9jrmiV6yNgXfd9dSIRJY3axUzEj0XUzIYBEOZEmeILKGS25ELUayzyiSXWIR&callback=bingMapsLoaded')
    ready
    .then(function() {
      this.renderMap();
    }.bind(this), function() {
      console.log('ERROR: Map script failed to load')
    });
    if( typeof window !== 'undefined' ) {
      window.addEventListener('resize', this.onResize);
      this.updateDimensions()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    if (this.Map) {
      this.Map.dispose();
      this.Map = null;
    }
    if (this.rqf) {
      window.cancelAnimationFrame(this.rqf);
      this.rqf = null;
    }
  }

  onResize = () => {
    if (this.rqf) return
      if( typeof window !== 'undefined' )
        this.rqf = window.requestAnimationFrame(this.handleResize.bind(this));
  }

  handleResize() {
    this.rqf = null
    this.updateDimensions()
  }

  updateDimensions() {
    let { width, height } = this.returnWrapperDimensions()
    this.setDimensions(this.myMapElRef.current, width, height)
  }

  setDimensions(el, width, height) {
    el.style.width = width + 'px';
    el.style.height = height + 'px';
  }

  returnWrapperDimensions() {
    return this.myMapWrapperRef.current.getBoundingClientRect();
  }

  renderMap() {
    let node = this.myMapElRef.current;
    this.Map = new Microsoft.Maps.Map(node, {
      labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
      zoom: 8,
      attribution : false,
      disableZooming: true,
      enableClickableLogo: false,
      disableScrollWheelZoom: true,
      enableHighDpi: true,
      showDashboard: false,
      showScalebar: false,
      showTermsLink: false,
      liteMode: true
    });
          
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
      var searchManager = new Microsoft.Maps.Search.SearchManager(this.Map);
      var requestOptions = {
        bounds: this.Map.getBounds(),
        where: this.location,
        callback: function (answer, userData) {
          var pin = new Microsoft.Maps.Pushpin(answer.results[0].location, {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="30" viewBox="0 0 19 30"><title>  pin</title><desc>Pin</desc><g fill="none"><path d="M9.5 0C14.7 0 19 4.3 19 9.5 19 17 11.9 26.5 9.5 29.4 7.1 26.5 0 17 0 9.5 0 4.3 4.3 0 9.5 0" fill="#6400AA"/><path d="M9.5 14.4C12.3 14.4 14.5 12.2 14.5 9.4 14.5 6.6 12.3 4.4 9.5 4.4 6.7 4.4 4.5 6.6 4.5 9.4 4.5 12.2 6.7 14.4 9.5 14.4" fill="#FFF"/></g></svg>',
          });
          this.Map.setView({ bounds: answer.results[0].bestView });
          this.Map.entities.push(pin);
        }.bind(this)
      };
      searchManager.geocode(requestOptions);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <div ref={this.myMapWrapperRef} style={{
          position:'relative',
          width:'100%',
          backgroundImage: `${process.env.REACT_APP_IMAGE_FOLDER}/`
        }}>
          <div ref={this.myMapElRef} style={{
            position:'relative',
            width:'100%',
            height:'320px'
          }}>&nbsp;</div>
        </div>
      </div>
    )
  }
}

export default Map

