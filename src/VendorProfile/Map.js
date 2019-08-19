import React, { Component } from 'react'

class Map extends Component {

  /* Create a new Google map object:
      - in the <div> with id 'props.id'
      - with options set in the 'props.options' object
      - with an 'onMapLoad()' method as referenced in 'props.onMapLoad' 
  */
  mapScriptLoaded = () => {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options)
    this.props.onMapLoad(map)
    // This would _probably_ be a good place to calculate the height of the
    // <div> containing the map Object...
    // 
    // Want the height of the map <div> to be equal to the height of the content
    // inside the 2/3 width column in the 'Overview' tab of the <VendorProfile>
    // component
    // 
    // Currently this particular column contains two <Card> components:
    // - each <Card> has 24px padding (set in ant.design)
    // - each <Card> has 1px border (set in ant.design)
    // - the sceond <Card> has a 20px top margin (set in <VendorProfile>)
    // 
    // Currently see two possibilities:
    // 1. 'React'-ive way
    //    * set a Ref on the 2/3 width column
    //    * get the height of the column/its contents (inner height)
    // 2. JS way
    //    * set id on column or the cards contained in the column...
    //    * use DOM JS methods to get the height of the column/its contents
    // 
    // Once the height has been calculated, it would need to be saved in state
    // so that it can be used in render() 
  }

  componentDidMount() {
    /* If the Maps API has been loaded via Google's script, then the 'window.google'
       Object will exist, and the map creation function 'mapScriptLoaded()' can be
       executed.
       Otherwise, add the Google Maps API <script> to the DOM, and once the <script>
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