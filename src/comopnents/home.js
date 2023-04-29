import React from 'react'
import Section from './section'


function Home() {
  return (
    <container>
      <Section
        title="Model-S"
        description="Order online for Touchless Delivery"
        BackgroundImg="/model-s.jpg"
        LeftbtnText="Custom Order"
        RightbtnText="Existing Inventory"
      />
      <Section 
        title="Model-y"
        description="Order online for Touchless Delivery"
        BackgroundImg="/model-x.jpg"
        LeftbtnText="Custom Order"
        RightbtnText="Existing Inventory"
      />
      <Section
        title="Model-x"
        description="Order online for Touchless Delivery"
        BackgroundImg="/model-y.jpg"
        LeftbtnText="Custom Order"
        RightbtnText="Existing Inventory"
      />
      <Section 
      title="Model-3"
      description="Order online for Touchless Delivery"
      BackgroundImg="/model-3.jpg"
      LeftbtnText="Custom Order"
      RightbtnText="Existing Inventory"
      />
      <Section
      title="Lowest cost Solar Panel in America"
      description="Money-back gurantee"
      BackgroundImg="/solar-panel.jpg"
      LeftbtnText="Order Now"
      RightbtnText="Learn More"
      />
      <Section
      title="Solar for New roofs"
      description="Solar Roofs cost less than a New Roof plus solar panel"
      BackgroundImg="/solar-roof.jpg"
      LeftbtnText="Order Now"
      RightbtnText="Learn More"
      />
        <Section
      title="Accessories"
      description=""
      BackgroundImg="/accessories.jpg"
      LeftbtnText="Order Now"
      />
    </container>
    
  )
}

export default Home