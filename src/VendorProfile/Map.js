import React, { Component } from 'react'

class Map extends Component {

  /* Create a new Google map object:
      - in the DOM element with id 'props.id'
      - with options set in the 'props.options' object
      - with an 'onMapLoad()' method as referenced in 'props.onMapLoad' 
  */
  mapScriptLoaded = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options)
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    /* If the Maps API has been loaded via Google's script, then 'window.google'
       will exist, and the map creation function 'mapScriptLoaded()' can safely be
       executed.
       Otherwise, add the Google Maps API script to the DOM, and once the script
       has loaded, execute 'mapScriptLoaded()'.
    */ 
    if (window.google) {
      this.mapScriptLoaded()
  
    } else {
      // Create new <script> element for the Google Maps API script
      let mapScript = document.createElement('script')
      mapScript.type = 'text/javascript'
      mapScript.src = 'https://maps.google.com/maps/api/js?key=AIzaSyA6_9RWW3hgN6ODknvL9FTAvzhyuSVu3gU'
  
      // Add the new <script> element to the <head>
      const headTag = document.getElementsByTagName('head')[0]
      headTag.appendChild(mapScript)

      // --> IMPORTANT 
      // Cannot access Maps API until *after* the new script has loaded, so
      // add an event listener that will wait until the new <script> has loaded,
      // and *then* execute 'mapScriptLoaded()'. 
      mapScript.addEventListener('load', event => {
        this.mapScriptLoaded()
      })
    }
  }

  render() {
    return (
      <div style={{ height: 206+206-24-2 }} id={this.props.id} />
    )
  }
}

export default Map